export function maskedCPF(cpf: string): string {
  if (cpf) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.***.***-**");
  }

  return cpf;
}