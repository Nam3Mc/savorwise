async function loadTemplate(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Failed to load template at: ${path}`);
  }
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {

  try {
    
    const headerTemplate = await loadTemplate('/partials/header.html')
    const footerTemplate = await loadTemplate('/partials/footer.html')
    
    const headerElement = document.querySelector('.navbar')
    const footerElement = document.querySelector('.footer')

    headerElement.innerHTML = headerTemplate
    footerElement.innerHTML = footerTemplate

  } catch (error) {

    console.error('Error loading header/footer partials:', error)

  }
}