import { isAxiosError } from "axios";

export class ErrorDefault {
  constructor(private readonly error: Error | any) {}

  execute() {
    if (isAxiosError(this.error)) {
      return this.error.response?.data;
    }

    return {
      message: {
        ptBr: "Serviço indisponível, tente novamente mais tarde",
        en: "Service unavailable, try again later",
      },
      status: 500,
      data: null,
    };
  }
}
