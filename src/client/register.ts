/* contract to call is: 
// Basic escrow contract that transfers funds from one account to another if the recipient signs the transaction. Written in Rust for Solana blockchain

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
    // Cantidad que el solicitante desea
    amount_requested: u64,
    mint_requested: Pubkey,

    // Cantidad que el solicitante ofrece
    amount_offered: u64,
    mint_offered: Pubkey,

    finalized: bool,
}
}
*/

console.log("My address:", pg.wallet.publicKey.toString());
const balance = await pg.connection.getBalance(pg.wallet.publicKey);
console.log(`My balance: ${balance / web3.LAMPORTS_PER_SOL} SOL`);

// start trade
const trade = new web3.Account();
const tradeAccount = await web3.SystemProgram.createAccount({
    fromPubkey: pg.wallet.publicKey,
    newAccountPubkey: trade.publicKey,
    lamports: await web3.connection.getMinimumBalanceForRentExemption(200),
    space: 200,
});
const startTrade = new web3.Transaction().add(tradeAccount);
await web3.sendAndConfirmTransaction(
    pg.connection,
    startTrade,
    [pg.wallet],
    {
        skipPreflight: true,
        commitment: "singleGossip",
    }
);
