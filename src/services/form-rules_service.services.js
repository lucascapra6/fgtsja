export const required = (value) => {
  return !!value || 'Esse campo é obrigatório';
};

export const validationCPF = (value) => {
  if (!value) return false;
  value = value.replace(/[^\d]+/g, '');
  if (value === '') return false;

  if (
    value.length !== 11 ||
    value === '00000000000' ||
    value === '11111111111' ||
    value === '22222222222' ||
    value === '33333333333' ||
    value === '44444444444' ||
    value === '55555555555' ||
    value === '66666666666' ||
    value === '77777777777' ||
    value === '88888888888' ||
    value === '99999999999'
  )
    return 'Esse CPF não é válido';

  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(value.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(value.charAt(9))) return 'Esse CPF não é válido';

  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(value.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;

  return rev === parseInt(value.charAt(10)) || 'Esse CPF não é válido';
};

export const validationEmail = (value) => {
  //TODO: Correção da validação do e-mail
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase()) || 'Esse e-mail não é válido';
};

export const loanValueMin = (value) => {
  let newValue = value;
  if (typeof value === 'string') {
    newValue = Number(value);
    if (isNaN(newValue)) {
      return 'Insira um valor válido';
    }
  }
  if (newValue < 300) return 'Insira um valor maior que R$ 300,00';
  return true;
};

export const loanValueMax = (value) => {
  let newValue = value;
  if (typeof value === 'string') {
    newValue = Number(value);
    if (isNaN(newValue)) {
      return 'Insira um valor válido';
    }
  }
  if (newValue > 60000) return 'Insira um valor menor que R$ 60.000,00';
  return true;
};

export const validationPersonalReferences = (
  firstReference,
  secondReference
) => {
  if (firstReference === secondReference)
    return 'As referências devem ser diferentes';
  return true;
};

export const personalReferencePhone = (phone, userPhone) => {
  const formattedPhone = phone.replace(/\W/g, '');
  if (formattedPhone.length < 11) {
    return 'Insira um número de telefone válido';
  }
  if (formattedPhone === userPhone) {
    return 'Não pode ser o seu telefone';
  }
  return true;
};

//TODO: Alterar pra exportação com module.exports
