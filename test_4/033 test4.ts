interface IPayment {
  sum: number
  from: number
  to: number
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number
}

interface IDataFailed {
  errorMessage: string
  errorCode: number
}

interface IResponseSuccess {
  status: PaymentStatus.Success
  data: IDataSuccess
}

interface IResponseFailed {
  status: PaymentStatus.Failed
  data: IDataFailed
}

function isSuccess(
  res: IResponseSuccess | IResponseFailed,
): res is IResponseSuccess {
  return res.status === 'success'
}

function resCheck(res: IResponseSuccess | IResponseFailed): number {
  if (isSuccess(res)) {
    return 1
  } else {
    return 2
  }
}
