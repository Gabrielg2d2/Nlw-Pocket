export function errorUpdateGoal(error: Error) {
  const MESSAGE_PT_BR = "Erro ao atualizar meta";
  const MESSAGE_EN = "Error updating goal";
  const STATUS = 400;

  console.error("Error updating goal: ", error);

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
    };
  }

  return {
    message: {
      ptBr: "Serviço indisponível, tente novamente mais tarde",
      en: "Service unavailable, try again later",
    },
    status: 500,
    error,
  };
}
