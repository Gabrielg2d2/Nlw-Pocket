export function errorGetGoal(error: Error) {
  const MESSAGE_PT_BR = 'Erro, verifique os dados enviados e tente novamente'
  const MESSAGE_EN = 'Error, check the data sent and try again'
  const STATUS = 400

  if (error) {
    return {
      message: {
        ptBr: MESSAGE_PT_BR,
        en: MESSAGE_EN,
      },
      status: STATUS,
      error: {
        message: error.message,
        stack: error.stack,
      },
    }
  }

  return {
    message: {
      ptBr: 'Serviço indisponível, tente novamente mais tarde',
      en: 'Service unavailable, try again later',
    },
    status: 500,
    error,
  }
}
