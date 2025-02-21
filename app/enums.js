// Feauture which allows dev to define a set of values
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["APPROVED"] = 0] = "APPROVED";
    OrderStatus[OrderStatus["REJECTED"] = 1] = "REJECTED";
    OrderStatus[OrderStatus["CANCELLED"] = 2] = "CANCELLED";
    OrderStatus[OrderStatus["HOLD"] = 3] = "HOLD";
})(OrderStatus || (OrderStatus = {}));
;
var myStatus = OrderStatus.HOLD;
// Changing Value of Enums
var OrderStatus1;
(function (OrderStatus1) {
    OrderStatus1[OrderStatus1["APPROVED"] = 10] = "APPROVED";
    OrderStatus1[OrderStatus1["REJECTED"] = 11] = "REJECTED";
    OrderStatus1[OrderStatus1["CANCELLED"] = 66] = "CANCELLED";
    OrderStatus1[OrderStatus1["HOLD"] = 44] = "HOLD";
})(OrderStatus1 || (OrderStatus1 = {}));
;
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "Up";
    ArrowKeys["DOWN"] = "Down";
})(ArrowKeys || (ArrowKeys = {}));
// Below the value or ArrowKeys.UP equals "Up"
ArrowKeys.UP;
