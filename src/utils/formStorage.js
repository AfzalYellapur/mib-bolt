export const saveForms = (forms) => {
  localStorage.setItem('forms', JSON.stringify(forms));
  window.dispatchEvent(new Event('formsUpdated'));
};

export const getForms = () => {
  const forms = localStorage.getItem('forms');
  return forms ? JSON.parse(forms) : [];
};

export const saveForm = (form) => {
  const forms = getForms();
  const formData = { ...form, id: Date.now() };
  forms.push(formData);
  saveForms(forms);
  return formData;
};

export const updateForm = (formId, updatedForm) => {
  const forms = getForms();
  const updatedForms = forms.map(form => 
    form.id === formId ? { ...form, ...updatedForm } : form
  );
  saveForms(updatedForms);
  return updatedForms;
};

export const deleteForm = (formId) => {
  const forms = getForms();
  const updatedForms = forms.filter(form => form.id !== formId);
  saveForms(updatedForms);
  return updatedForms;
};