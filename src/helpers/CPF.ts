export function maskedCPF(cpf: string): string {
  if (cpf) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.***.***-**')
  }

  return cpf
}

export function validateCPF(cpf: string) {
  cpf = cpf.replace(/[^\d]/g, '') // Remove non-numeric characters

  if (cpf.length !== 11) {
    return false
  }

  if (/^(\d)\1{10}$/.test(cpf)) {
    return false
  }

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i)
  }
  let remainder = 11 - (sum % 11)
  let digit1 = remainder === 10 || remainder === 11 ? 0 : remainder

  // Check if the first verification digit is correct
  if (digit1 !== parseInt(cpf.charAt(9))) {
    return false
  }

  // Calculate the second verification digit
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i)
  }
  remainder = 11 - (sum % 11)
  let digit2 = remainder === 10 || remainder === 11 ? 0 : remainder

  // Check if the second verification digit is correct
  if (digit2 !== parseInt(cpf.charAt(10))) {
    return false
  }

  return true // Valid CPF
}
