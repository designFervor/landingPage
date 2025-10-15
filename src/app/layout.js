import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/boxicons.min.css'
import '@/assets/css/flaticon.css'
import '@/assets/css/header.css'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
import '@/assets/css/typography.css'
import 'react-modal-video/scss/modal-video.scss'
import 'react-photo-view/dist/react-photo-view.css';
import 'swiper/css';
import Header from '@/components/sections/header/header';
import Footer from '@/components/sections/footer';
import BootstrapForBrowser from '@/components/ui/bootstrapForBrowser.jsx';
import SetBackgroundColor from '@/components/ui/setBackgroundColor';
import ScrollToTop from '@/components/ui/scrollToTop';
import AddAnimation from '@/components/ui/addAnimation';
import Loading from '@/components/ui/loading';


export const metadata = {
  title: "Design Fever - Award-Winning Design Agency | Branding & Digital Design",
  description: "We craft brands that make a lasting impact. From brand strategy to digital experiences, we help companies design their way to success. Get started today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loading />
        <SetBackgroundColor />
        <BootstrapForBrowser />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <AddAnimation />
      </body>
    </html>
  );
}
