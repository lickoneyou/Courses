"use strict";
const myRec = {
    sum: 10000,
    from: 2,
    to: 4,
};
const answer1 = {
    status: 'success',
    data: {
        databaseId: 567,
        sum: 10000,
        from: 2,
        to: 4,
    },
};
const answer2 = {
    status: 'failed',
    data: {
        errorMessage: 'Недостаточно средств',
        errorCode: 4,
    },
};
