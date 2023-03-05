from seahorse.prelude import *

declare_id('6LCwX2kBnTu4KnZ9derNN4enQ9s1M2pM5YiZwWMCpYDo')

class Jobrequest(Account):
  owner: Pubkey
  id: i64
  money: i64
  time: i64

@instruction
def init_calculator(owner: Signer, jobrequest: Empty[Jobrequest], id: i64, money: i64, time: i64):
  jobrequest = jobrequest.init(payer = owner, seeds = ['kayra', owner])
  jobrequest.owner = owner.key()
  jobrequest.id = id
  jobrequest.money = money
  jobrequest.time = time
