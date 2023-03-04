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

// start trade with 1 SOL for 1 SOL with 8EngWcVpG9aNYd5vRehpSZ4MoS8gcvnXX6nEdp5pdUZo address

const trade = await pg.program.instruction.startTrade({
    accounts: {
        trade: new web3.PublicKey("8EngWcVpG9aNYd5vRehpSZ4MoS8gcvnXX6nEdp5pdUZo"),
        authority: pg.wallet.publicKey,
        systemProgram: web3.SystemProgram.programId,
    },
    signers: [pg.wallet.payer],
    data: {
        amount_offered: 1,
        amount_requested: 1,
    },
});

console.log("Trade started:", trade);

// get trade info

const tradeInfo = await pg.program.account.trade.fetch( new web3.PublicKey("8EngWcVpG9aNYd5vRehpSZ4MoS8gcvnXX6nEdp5pdUZo"));
console.log("Trade info:", tradeInfo);


