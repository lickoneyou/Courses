"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isSuccess(res) {
    return res.status === 'success';
}
function resCheck(res) {
    if (isSuccess(res)) {
        return 1;
    }
    else {
        return 2;
    }
}
