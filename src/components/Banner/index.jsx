import {Button, Container, Head, Text} from "@/components";
import {imageBanner, imageBannerLg, imageBannerMd, imageBannerSm} from "@/images";
import {stylesBanner} from "@/styles";


export const Banner = () => (
  <section className={stylesBanner.banner}>
    <Container>
      <div className={stylesBanner.banner_picture}>
        <picture>
          <source srcSet={imageBannerSm} media="(max-width: 360px)"/>
          <source srcSet={imageBannerMd} media="(max-width: 768px)"/>
          <source srcSet={imageBannerLg} media="(max-width: 1024px)"/>
          <img src={imageBanner} alt={"banner"}/>
        </picture>
        <div className={stylesBanner.banner_text}>
          <div className={stylesBanner.banner_text_container}>
            <div className={stylesBanner.banner_text_content}>
              <Head element={"h1"}>Test assignment for front-end developer</Head>
              <Text element={"p"}>
                What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
                understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                They should also be excited to learn, as the world of Front-End Development keeps evolving.
              </Text>
            </div>
            <div className={stylesBanner.banner_text_button}>
              <Button element={"a"} href={"#singUp"}>Sing up</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
