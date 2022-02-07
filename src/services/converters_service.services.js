import { formatDistanceToNow } from 'date-fns';

import pt from 'date-fns/locale/pt';
/**
 *
 * @param value
 * @returns {string}
 * @description Filtro para transformar a taxa de juros em porcentagem
 */
export const rateMonth = (value) => {
  value = parseFloat(value);
  if (typeof value === 'number') {
    Number(value);
    return `${value.toFixed(2)} %`;
  }
  return 'Valor ainda não definido';
};

/**
 *
 * @param value
 * @returns {string}
 * @description Filtro para transformar números em moeda BRL
 */
export const currencyFilter = (value) => {
  if (value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
  return 'R$ 0,00';
};

/**
 *
 * @param value
 * @param installments
 * @returns {string}
 * @description Filtro para formatar os valores das parcelas
 */
export const installmentsFormatter = (value, installments) => {
  if (value && installments) {
    return `${installments}x ${currencyFilter(value)}`;
  }
  return 'Não definido';
};

export const formatDaysAgo = (value) => {
  if (value) {
    return formatDistanceToNow(new Date(value), {
      locale: pt,
    });
  }
  return 'Não definido';
};

export const moneyToNumber = (value) => {
  const stringValue = value.toString();
  const formatedValue = stringValue.replace(/[^0-9,]/g, '').replace(',', '.');
  return Number(formatedValue);
};

export const cellPhoneFormatter = (value) => {
  if (value) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    return value;
  }
};

export const numberToMonth = (value) => {
  if (value!=null) {
    switch (value) {
      case 0:
        return 'Janeiro';
      case 1:
        return 'Fevereiro';
      case 2:
        return 'Março';
      case 3:
        return 'Abril';
      case 4:
        return 'Maio';
      case 5:
        return 'Junho';
      case 6:
        return 'Julho';
      case 7:
        return 'Agosto';
      case 8:
        return 'Setembro';
      case 9:
        return 'Outubro';
      case 10:
        return 'Novembro';
      case 11:
        return 'Dezembro';
      default:
        return 'Não definido';
    }
  }
  return 'Não definido';
};
export const CPFFormatter = (value) => {
  if (value) {
    value = value.replace(/[^\d]/g, '');
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return value;
  }
};
export const capitalize = str => {
	if (typeof str !== 'string') {
		return '';
	}
	return str.charAt(0).toUpperCase() + str.substr(1);
}

export const dateFilter = str => {
  const dateArray = str.split('/')
  return `${numberToMonth(Number(dateArray[1])-1).substring(0, 3).toLowerCase()}/${dateArray[2].substr(2)}` 
}
