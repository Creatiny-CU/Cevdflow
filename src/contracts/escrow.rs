use anchor_lang::prelude::*;

declare_id!("6727fxW5kPuHoESAGz6tXz7z2cFanVZqMSZQsGvKrmv");

#[program]
pub mod escrow {
    use super::*;

    pub fn start_trade(
        ctx: Context<StartTrade>,
        amount_offered: u64,
        amount_requested: u64,
    ) -> Result<()> {
        ctx.accounts.trade.finalized = false;
        ctx.accounts.trade.amount_offered = amount_offered;
        ctx.accounts.trade.amount_requested = amount_requested;
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(amount_offered: u64, amount_requested: u64)]
pub struct StartTrade<'info> {
    pub system_program: Program<'info, System>,
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(
        init,
        payer = authority,
        space = 200,
    )]
    pub trade: Account<'info, Trade>,
}

#[account]
pub struct Trade {
    amount_requested: u64,
    mint_requested: Pubkey,

    amount_offered: u64,
    mint_offered: Pubkey,

    finalized: bool,
}