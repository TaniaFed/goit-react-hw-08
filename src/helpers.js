const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, '').slice(0, 11); // max 11 цифр

  if (cleaned.length === 0) return '';
  if (cleaned.length <= 1) return `+${cleaned}`;
  if (cleaned.length <= 4) return `+${cleaned[0]} (${cleaned.slice(1)}`;
  if (cleaned.length <= 7)
    return `+${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`;
  if (cleaned.length <= 9)
    return `+${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;

  return `+${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`;
};

const formatName = (name) => {
  return name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export { formatName, formatPhoneNumber };