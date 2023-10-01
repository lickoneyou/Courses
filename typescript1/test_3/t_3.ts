interface IRequest {
  sum: number
  from: number
  to: number
}

const myRec: IRequest = {
  sum: 10000,
  from: 2,
  to: 4,
}

type status = 'success' | 'failed'

interface IAns extends IRequest {
  databaseId: number
}

interface err {
  errorMessage: string
  errorCode: number
}

interface myAns {
  status: status
  data: IAns | err
}

const answer1: myAns = {
  status: 'success',
  data: {
    databaseId: 567,
    sum: 10000,
    from: 2,
    to: 4,
  },
}

const answer2: myAns = {
  status: 'failed',
  data: {
    errorMessage: 'Недостаточно средств',
    errorCode: 4,
  },
}
