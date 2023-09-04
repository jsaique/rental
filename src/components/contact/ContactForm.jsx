export default function ContactForm() {
  return (
    <section className="max-w-[1240px] m-auto p-4 h-screen" id="contact">
      <h1 className="text-2xl font-bold text-center p-4">
        Interested on renting?
      </h1>
      <form className="max-w-[600px] m-auto ">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-4"
          type="email"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </section>
  );
}
