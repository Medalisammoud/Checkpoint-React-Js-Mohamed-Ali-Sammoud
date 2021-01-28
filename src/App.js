import "./App.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <main class="main">
        <section class="image">
          <img src="/avatar.jpg" class="img-thumbnail" alt="avatar" />
          <div class="mb-3">
            <input
              class="form-control form-control-sm"
              id="formFileSm"
              type="file"
            />
          </div>
        </section>
        {/* section de l'inscription  */}
        <section class="inscri">
          {/* div content 1  */}
          <div class="content1">
            {/* div nom  */}
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Nom
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {/* div Prenom  */}
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Prenom
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {/* div date de naissance  */}
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Date De Naissance
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {/* div lieu de naissance   */}
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Lieu De Naissance
              </span>
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {/* div checked radio of sexe   */}
            <label for="exampleFormControlInput1" class="form-label">
              Sexe
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Homme
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Femme
              </label>
            </div>
          </div>
          {/*  div content 2  */}
          <div class="content1">
            {/* div Email  */}
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                @Email
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="inputGroup-sizing-sm" ></input>
                </div>
              {/* div telephone  */}
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  Telephone
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              {/* div fichier curriculum vitae cv  */}
              <label for="exampleFormControlInput1" class="form-label">
                Curriculum Vitae (CV)
              </label>
              <div class="mb-3">
                <input
                  class="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                />
              </div>
              {/* div area Message   */}
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </section>
          {/* div Button Send  */}
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </div>
        </main>
      </div>
  );
}

export default App;
