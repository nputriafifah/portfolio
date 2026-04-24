export default function Contact() {
  const handleSend = (e) => {
    e.preventDefault();
    alert("Pesan terkirim!");
  };

  return (
    <section id="contact">
      <h2>Kontak</h2>

      <form onSubmit={handleSend}>
        <input type="text" placeholder="Nama" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Pesan"></textarea>
        <button type="submit">Kirim</button>
      </form>
    </section>
  );
}