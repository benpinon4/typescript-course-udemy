// Feauture which allows dev to define a set of values
enum OrderStatus2 {
  APPROVED,
  REJECTED,
  CANCELLED,
  HOLD,
};

const myStatu1s = OrderStatus.HOLD;

// Changing Value of Enums

enum OrderStatus3 {
  APPROVED = 10,
  REJECTED = 11,
  CANCELLED = 66,
  HOLD = 44,
};

enum ArrowKeys3 {
  UP = "Up",
  DOWN = "Down",
}
// Below the value or ArrowKeys.UP equals "Up"
ArrowKeys.UP;
