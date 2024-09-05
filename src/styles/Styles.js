import styled from "styled-components";

export const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  /* position: relative; */
`;

export const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// Layout

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.6rem;
  padding: 0.6rem 3.6rem;
  border-bottom: solid 1px var(--color-grey-300);
  div:first-child {
    a:last-child {
      font-size: 1.8rem;
    }
  }

  .heart {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    justify-self: end;
    font-size: 2.4rem;
    color: #333;
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 2rem;
    position: relative;

    .cartIcon {
      font-size: 2.4rem;
    }

    p {
      position: absolute;
      top: -0.8rem;
      right: -0.7rem;
      height: 2rem;
      width: 2rem;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--color-red);
      color: var(--color-grey-50);
    }
  }

  @media (max-width: 776px) {
    padding: 1.6rem;
  }

  a {
    font-weight: 500;
    font-size: 2rem;
  }

  ul {
    flex: 1;
    display: flex;
    list-style: none;
    gap: 2.4rem;

    @media (max-width: 776px) {
      display: none;
    }

    > a {
      font-size: 1.6rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    font-size: 2.4rem;
  }
`;

export const StyledMain = styled.main`
  min-height: 72.5vb;
`;

export const StyledFooter = styled.footer`
  display: flex;
  background-color: var(--color-grey-300);
  color: var(--color-grey-600);
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1.6rem 0;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .footer-icons {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
  li {
    list-style: none;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2.4rem;
  background-color: var(--color-grey-100);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

// Store

export const StyledStoreLayout = styled.div`
  display: grid;
  grid-template-columns: 32rem 1fr;
  grid-template-rows: auto 1fr;
  height: 130vh;
`;

export const Main = styled.main`
  overflow: scroll;
  grid-column: 2;
  grid-row: 2;

  @media (max-width: 776px) {
    grid-column: 1/-1;
  }
`;

export const StyledProductFilter = styled.div`
  grid-column: 1 / -1;
  border-bottom: 1px solid var(--color-grey-300);
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 776px) {
    gap: 0;
    padding: 0 1rem;
  }

  @media (max-width: 558px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  div {
    padding: 1.4rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: 2px solid transparent;

    @media (max-width: 1050px) {
      padding: 1.8rem;
    }

    @media (max-width: 776px) {
      padding: 0.8rem;
    }

    img {
      height: 4.8rem;

      @media (max-width: 776px) {
        display: none;
      }
    }
  }

  div:hover {
    border-bottom: 2px solid var(--color-red);
  }
`;

export const StyledSortSidebar = styled.div`
  border-right: 1px solid var(--color-grey-300);
  display: flex;
  flex-direction: column;
  padding: 1.4rem 1.6rem;
  gap: 1rem;

  @media (max-width: 776px) {
    display: none;
  }
`;

export const StyledSort = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
  border-radius: 0.5rem;

  padding: 2.4rem 2rem;

  span {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  input {
    cursor: pointer;
    margin-right: 1rem;
  }
`;

export const StyledBrands = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
  border-radius: 0.5rem;

  padding: 2.4rem 2rem;

  span {
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  input {
    cursor: pointer;
    margin-right: 1rem;
  }

  div span {
    font-size: 1.6rem;
    cursor: pointer;
    background-color: var(--color-grey-100);
    padding: 0.4rem 1rem;
    align-self: flex-start;
    width: 60%;
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 2px #333;
  }
`;

export const StyledRating = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-grey-50);
  border-radius: 0.5rem;
  padding: 2.4rem 2rem;

  span {
    font-size: 1.8rem;
  }

  div {
    display: flex;
    gap: 1rem;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.8rem;
      border: none;
      border-radius: 0.4rem;
      cursor: pointer;
      background-color: var(--color-grey-100);
      box-shadow: 0 0 2px #333;

      span {
        font-size: 1.6rem;
      }
    }
  }
`;

export const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  background-color: var(--color-grey-50);

  @media (max-width: 1490px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledProductCard = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 40rem;
  background-color: #fff;
  border: 1px solid var(--color-grey-300);

  /* border-radius: 1rem; */

  .productCardImage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.6rem;
    height: 75%;
    overflow: hidden;

    img {
      width: 100%;
      height: 80%;
      object-fit: contain;
      object-position: center;
    }
  }

  .productCardInfo {
    background-color: var(--color-grey-50);
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);

      p {
        font-size: 1.8rem;
        font-weight: 600;
      }
    }
  }

  button {
    align-items: center;
    width: 100%;
    background-color: var(--color-grey-900);
    color: var(--color-grey-100);
    padding: 0.6rem 0;
    font-size: 1.4rem;
  }
`;

export const StyledProduct = styled.div`
  max-width: 100vw;
  height: 92vh;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 1fr 8rem;
  position: relative;

  @media (max-width: 776px) {
    grid-template-columns: 100%;
    grid-template-rows: none;
    height: 100vh;
  }

  .productInfo {
    background-color: var(--color-grey-50);
    display: flex;
    flex-direction: column;
    padding: 2.6rem 4.4rem;

    header {
      display: flex;
      align-items: center;
      gap: 2.4rem;
      margin-bottom: 2.4rem;
    }

    @media (max-width: 776px) {
      padding: 1.6rem 2rem;
    }

    p:first-child {
      font-size: 3.6rem;

      @media (max-width: 776px) {
        margin-bottom: 1rem;
      }
    }

    p {
      font-size: 2.6rem;
    }

    ul {
      list-style: square;
      margin-top: 2.4rem;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      font-size: 1.7rem;

      @media (max-width: 776px) {
        list-style: none;
      }
    }

    span {
      background-color: var(--color-red);
      align-self: flex-start;
      color: #fff;
      padding: 0.2rem 0.8rem;
      border-radius: 0.4rem;
    }
  }
`;

export const StyledProductSlider = styled.div`
  height: 100%;
  display: flex;
  img {
    height: 40rem;
  }
  .swiper-slide {
    height: 100%;

    @media (max-width: 776px) {
      height: 90%;
      padding: 3.2rem 0;
    }
  }
`;

export const StyledProductOperations = styled.div`
  grid-column: 1/-1;
  border-top: 1px solid var(--color-grey-300);
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 10%;
  gap: 1.8rem;

  @media (max-width: 776px) {
    padding: 1.4rem;
    justify-content: center;
    position: sticky;
    bottom: 0;
    background-color: aliceblue;
  }

  button {
    width: 20rem;
    padding: 1.4rem;
    background-color: var(--color-red);
    border: none;
    border-radius: 0.2rem;
    font-size: 1.6rem;
    color: var(--color-grey-50);
    cursor: pointer;
  }

  button:first-child {
    background-color: var(--color-grey-900);
  }

  button:hover {
    opacity: 0.9;
  }
`;

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: var(--color-grey-100);
  min-height: 100vh;

  position: relative;

  @media screen and (max-width: 776px) {
    padding: 3rem 1.6rem;
  }

  @media screen and (max-width: 558px) {
    padding: 3rem 1rem;
  }

  .cartProductCard {
    width: 100%;
    height: 12rem;
    background-color: var(--color-grey-0);
    color: var(--color-grey-900);
    padding: 0 2.8rem;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    position: relative;
    gap: 1.4rem;

    @media screen and (max-width: 776px) {
      font-size: 1.4rem;
      padding: 0 1.8rem;
    }

    @media screen and (max-width: 558px) {
      padding: 3rem 1.6rem;
      display: grid;
      gap: 0;

      /* flex-direction: column; */

      height: auto;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      padding: 1rem;
    }

    img {
      width: 12rem;
      max-height: 12rem;
      padding: 1.4rem;
      cursor: pointer;
      grid-column: 1;
      @media screen and (max-width: 558px) {
        grid-row: 1 / 5;
        max-height: 14rem;
        padding: 0;
      }
    }
    h2 {
      width: 50%;
      font-weight: 500;
      font-size: 2rem;
      cursor: pointer;

      @media screen and (max-width: 1050px) {
        font-size: 1.6rem;
      }

      @media screen and (max-width: 776px) {
        font-size: 1.4rem;
      }

      @media screen and (max-width: 558px) {
        font-size: 1.4rem;
        grid-column: 2 / -1;
        width: 75%;
      }
    }
    p {
      justify-self: flex-start;
    }
    .quantityButton {
      font-size: 2rem;
      display: flex;
      align-items: center;

      button {
        padding: 1rem 1.4rem;
        background-color: var(--color-grey-50);
        border: 1px solid var(--color-grey-100);

        @media screen and (max-width: 558px) {
          padding: 0.6rem 0.8rem;
        }
      }

      button:active {
        background-color: var(--color-grey-100);
      }
    }
    .crossCartButton {
      padding: 1rem 1.4rem;
      background-color: var(--color-grey-50);
      border: 1px solid var(--color-grey-100);

      @media screen and (max-width: 558px) {
        position: absolute;
        top: 0rem;
        right: 0rem;
        /* background-color: var(--color-grey-200); */
        padding: 0.4rem 0.8rem;
      }
    }
    button:active {
      background-color: var(--color-grey-100);
    }
  }

  .cartCheckout {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 1rem 0;
    gap: 4.8rem;
    background-color: var(--color-grey-900);
    padding: 1.4rem 3rem;
    color: var(--color-grey-0);

    p {
      font-size: 2.8rem;
    }

    button {
      padding: 1.4rem 4.8rem;
      font-size: 1.6rem;
      background-color: var(--color-red);
      color: var(--color-grey-0);
    }
  }
`;

export const StyledUser = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
  padding-bottom: 0;

  @media screen and (max-width: 1260px) {
    padding: 0 6rem;
  }
  @media screen and (max-width: 776px) {
    padding: 0 2.4rem;
  }

  header {
    font-size: 2.8rem;
    font-weight: 500;
    padding: 1rem 0;
  }

  .user {
    display: flex;
    height: min-content;
    gap: 4.2rem;

    .userCard {
      background-color: var(--color-grey-50);
      border-radius: 10px;
      flex: 1;

      display: flex;
      flex-direction: column;

      .profile {
        display: flex;
        align-items: center;
        gap: 2.4rem;
        padding: 2.4rem;
        border-radius: 10px;
        background-color: var(--color-grey-100);

        img {
          height: 8rem;
          border-radius: 50%;
          box-shadow: 0 0 5px #00000035;
        }

        div {
          display: flex;
          flex-direction: column;

          span {
            font-size: 2.4rem;
            font-weight: 600;
          }
        }
      }

      .profileActions {
        display: flex;
        flex-direction: column;

        div {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.8rem 2.4rem;
          font-size: 1.9rem;
          color: var(--color-grey-500);
          cursor: pointer;
          transition: all 0.1s;
        }

        div:first-child {
          background-color: #2f80ed;
          color: var(--color-grey-0);
        }

        div:hover {
          background-color: #2f81edbd;
          color: var(--color-grey-0);
        }
      }

      button {
        display: none;
      }

      @media screen and (max-width: 776px) {
        button {
          display: flex;
          margin-top: 2rem;
          transition: all 0.2s;
        }

        button:hover {
          transform: translateY(-2px);
          background-color: #297ce8cd;
        }
      }
    }

    .userDetails {
      background-color: var(--color-grey-50);
      border-radius: 10px;
      flex: 3;
      height: min-content;

      @media screen and (max-width: 776px) {
        display: none;
      }

      header {
        color: var(--color-grey-600);
        padding: 1.8rem 4.8rem;
        border-bottom: 3px solid var(--color-grey-200);
      }

      main {
        padding: 4.8rem;
        display: flex;
        gap: 12rem;

        @media screen and (max-width: 1260px) {
          gap: 6rem;
        }

        @media screen and (max-width: 980px) {
          gap: 2rem;
          flex-direction: column;
          align-items: start;
        }

        img {
          height: 24rem;
          border-radius: 50%;
          box-shadow: 0 0 5px #00000035;

          @media screen and (max-width: 1260px) {
            height: 18rem;
          }

          @media screen and (max-width: 980px) {
            align-self: center;
          }
        }

        .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4rem;

          div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-size: 1.8rem;

            p {
              background-color: var(--color-grey-0);
              padding: 1.2rem 2.4rem;
              color: var(--color-grey-600);
              border-radius: 10px;
            }
          }

          button {
            transition: all 0.2s;
          }

          button:hover {
            transform: translateY(-2px);
            background-color: #297ce8cd;
          }
        }
      }
    }
  }

  .userError {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    p {
      font-size: 4rem;
    }

    button {
      transition: all 0.2s;
    }

    button:hover {
      transform: translateY(-2px);
      background-color: #297ce8cd;
    }
  }
`;

export const StyledSignOutBtn = styled.button`
  border: none;
  background-color: #2f80ed;
  color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  font-size: 1.8rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledSignInBtn = styled.button`
  border: none;
  background-color: #2f80ed;
  color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  font-size: 1.8rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const StyledSignInPage = styled.main`
  width: 40%;
  height: min-content;
  padding: 2.4rem;
  margin: 5rem auto;
  background-color: var(--color-grey-50);
  position: relative;
`;

export const StyledSnackbar = styled.div`
  position: fixed;
  top: 1%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4ce9a2;
  color: var(--color-grey-0);
  text-align: center;
  padding: 1.2rem 1rem;
  font-size: 1.6rem;
`;

export const StyledCheckout = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0;
  background-color: var(--color-grey-100);
  position: relative;

  .form {
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-0);
    width: 75%;
    margin: 0 auto;
    border: 1px solid var(--color-grey-200);
    box-shadow: 0 0 5px var(--color-grey-300);
    border-radius: 5px;
    padding: 3.6rem 10.8rem;
    gap: 4.8rem;

    @media screen and (max-width: 776px) {
      width: 92%;
      padding: 2rem 4rem;
    }
    @media screen and (max-width: 558px) {
      padding: 2rem 1.2rem;
    }

    header {
      display: flex;
      font-size: 2.4rem;
      justify-content: space-around;
      color: var(--color-grey-400);

      p {
        width: 100%;
        text-align: center;
        padding: 1rem;
        cursor: pointer;
      }

      .active {
        color: var(--color-grey-900);
        border-bottom: 3px solid #3ecf8e;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;

      button {
        width: 30%;
        padding: 1.4rem 0;
        border: none;
        font-size: 1.7rem;
        background-color: var(--color-grey-100);
        color: var(--color-grey-400);
      }

      button:first-child:hover {
        background-color: var(--color-grey-200);
      }

      button:last-child {
        background-color: #3ecf8e;
        color: var(--color-grey-50);
      }
    }
  }
`;

export const StyledShippingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  section {
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
      flex: 1;

      label {
        font-size: 1.4rem;
        color: var(--color-grey-600);
      }

      input {
        margin-top: 0.4rem;
        font-size: 1.8rem;
        width: 100%;
        padding: 1rem 2.4rem;
        border: 1px solid var(--color-grey-300);
      }

      input:active,
      input:focus {
        outline: none;
        outline: 1px solid #3ecf8e;
      }
    }
  }

  .checkbox {
    display: flex;
    gap: 1rem;
  }
`;

export const StyledPaymentCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  div {
    width: 100%;
    margin: 0 auto;
    padding: 1.4rem;
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;
    border: 1px solid var(--color-grey-400);

    input[type="radio"] {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    label {
      flex: 1;
    }

    img {
      height: 3.6rem;
    }
  }
`;

export const StyledPaymentSuccess = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 4.8rem;
  color: var(--color-grey-100);
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: #3ecf8e;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  border-radius: 0.4rem;

  transform: translate(-50%, -50%);

  button {
    padding: 1.2rem 2.4rem;
    font-size: 1.8rem;
    border: 0;
    border-radius: 0.4rem;
  }
`;

// Wishlist
export const StyledWishlist = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: var(--color-grey-100);
  min-height: 100vh;

  position: relative;

  @media screen and (max-width: 776px) {
    padding: 3rem 1.6rem;
  }

  @media screen and (max-width: 558px) {
    padding: 3rem 1rem;
  }

  .wishlistProductCard {
    width: 100%;
    height: 12rem;
    background-color: var(--color-grey-0);
    color: var(--color-grey-900);
    padding: 0 2.8rem;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    position: relative;
    gap: 1.4rem;

    @media screen and (max-width: 776px) {
      font-size: 1.4rem;
      padding: 0 1.8rem;
    }

    @media screen and (max-width: 558px) {
      padding: 3rem 1.6rem;
      display: grid;
      gap: 0;

      /* flex-direction: column; */

      height: auto;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      padding: 1rem;
    }

    img {
      width: 12rem;
      max-height: 12rem;
      padding: 1.4rem;
      cursor: pointer;
      grid-column: 1;
      @media screen and (max-width: 558px) {
        grid-row: 1 / 5;
        max-height: 14rem;
        padding: 0;
      }
    }
    h2 {
      width: 50%;
      font-weight: 500;
      font-size: 2rem;
      cursor: pointer;

      @media screen and (max-width: 1050px) {
        font-size: 1.6rem;
      }

      @media screen and (max-width: 776px) {
        font-size: 1.4rem;
      }

      @media screen and (max-width: 558px) {
        font-size: 1.4rem;
        grid-column: 2 / -1;
        width: 75%;
      }
    }
    p {
      justify-self: flex-start;
    }

    .crossWishlistButton {
      padding: 1rem 1.4rem;
      background-color: var(--color-grey-50);
      border: 1px solid var(--color-grey-100);

      @media screen and (max-width: 558px) {
        position: absolute;
        top: 0rem;
        right: 0rem;
        /* background-color: var(--color-grey-200); */
        padding: 0.4rem 0.8rem;
      }
    }
    button:hover {
      background-color: var(--color-grey-100);
    }

    .add {
      padding: 1rem 4.4rem;
      background-color: var(--color-grey-100);
      border: 1px solid var(--color-grey-100);
      font-size: 1.5rem;
    }

    add:hover {
      background-color: var(--color-grey-100);
    }
  }
`;
