export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const isExpired = (dateString) => {
  if (!dateString) return false;
  const date = new Date(dateString);
  const now = new Date();
  return date <= now;
};

export const validateDateTime = (date, time) => {
  if (!date || !time) return true;
  
  const [hours, minutes] = time.split(':');
  const selectedDate = new Date(date);
  selectedDate.setHours(parseInt(hours), parseInt(minutes));
  
  const now = new Date();
  const thirtyMinutesFromNow = new Date(now.getTime() + (30 * 60 * 1000));
  
  return selectedDate > thirtyMinutesFromNow;
};

export const getExpiryError = (date, time) => {
  if (!date || !time) return '';
  
  const [hours, minutes] = time.split(':');
  const selectedDate = new Date(date);
  selectedDate.setHours(parseInt(hours), parseInt(minutes));
  
  const now = new Date();
  const thirtyMinutesFromNow = new Date(now.getTime() + (30 * 60 * 1000));
  
  if (selectedDate <= now) {
    return 'Expiry time must be in the future';
  }
  
  if (selectedDate <= thirtyMinutesFromNow) {
    return 'Expiry time must be at least 30 minutes in the future';
  }
  
  return '';
};