// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Simple "fake submit" for demo — replace with real email service
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    status.textContent = 'Tak for din besked – jeg vender tilbage snarest.';
    form.reset();
  });
}
