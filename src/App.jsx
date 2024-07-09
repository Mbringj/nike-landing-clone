import { Hero, CustomerReviews, Footer, Services, 
         SpecialOffer, Subcribe, PopularProducts, 
         SuperQualitySections
} from './sections/index';
import Nav from './components/Nav';


function App() {  

  return (
    <main>
      <Nav />
      <section className="xl:padding-l wide:padding-t padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQualitySections />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        CustomerReviews
      </section> 
      <section className="padding-x sm:py-32 py-16 padding">
        <Subcribe />
      </section>
      <section className="padding-x padding-t pb-8 padding">
        <Footer />
      </section>
    </main>
  )
}

export default App
