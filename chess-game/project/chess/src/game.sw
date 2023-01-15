library game;

dep board;
dep game;

use std::address::Address;
use board::Board;
use game::Status;

pub struct Game {
    player_1: Address,
    player_2: Address,
    game_nonce: u64,
    // this is the current state
    board: Board,
    status: Status,
}

// TODO: add methods to conver to & from a status code, i.e:
// 0, 1, 2, 3
pub enum Status {
    Active: (),
    Stalemate: (),
    Checkmate: (),
}


//////////////////////////////////////////////////////////////////
/// TESTS
//////////////////////////////////////////////////////////////////
// #[test()]
// fn test_new_game() {
//     let game = game::new();

//     assert(game.player_1 == );
//     assert(game.player_2 == );
//     assert(game.game_id.unwrap().is_none());
//     assert(game.board.position == Position::new());
//     assert(game.board.bitboard == BitStack::new());

//     if let Status::Ready = game.status {
//         assert(true);
//     } else {
//         assert(false)
//     };
// }