<script lang="ts">
    import { getSocialMediaLink } from "$lib/commons/utils";

    let facebook = getSocialMediaLink("facebook");
    let whatsapp = getSocialMediaLink("whatsapp");
    let linkedin = getSocialMediaLink("linkedin");
    let instagram = getSocialMediaLink("instagram");

</script>

<footer
    style="background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url('/images/groupe-personnes-occupees-multinationales-travaillant-au-bureau_146671-15664.jpg') no-repeat; background-size: cover; opacity: padding-bottom: 20px;"
    class="p-4 bg-aftgroup md:p-8 lg:p-10 dark:bg-gray-800"
>
    <div class="mx-auto max-w-screen-sm text-center">
        <div class="flex items-center justify-between">
            <a
                href="/"
                class="flex justify-center items-center text-2xl font-semibold text-white dark:text-white"
            >
                <img
                    src="/images/livezone-logo.svg"
                    class="h-8 lg:h-10 mr-3 mt-3"
                    alt="AFT LOGO"
                    style="filter: invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%);"
                />
            </a>
            <div
                style="justify-content: center"
                class="flex mt-4 space-x-3 sm:justify-center lg:justify-center sm:mt-0"
            >
                <a
                    href={whatsapp}
                    class="text-white font-size-[50px] text-lg hover:text-aftgroup dark:hover:text-white"
                >
                    <img class="mt-1" src="/images/Vecttor.png" alt="">
                    <!-- <i style="font-size: 24px;" class="fab fa-whatsapp"></i> -->
                </a>
                <a
                    href={linkedin}
                    class="text-white hover:text-aftgroup dark:hover:text-white"
                >
                    <img class="mt-1" src="/images/Vector.png" alt="">
                    <!-- <i style="font-size: 22px;" class="fab fa-linkedin"></i> -->
                </a>
                <a
                    href={facebook}
                    class="text-white hover:text-aftgroup dark:hover:text-white"
                >
                    <img class="mt-1" src="/images/dashicons_facebook-alt.png" alt="">
                    <!-- <i style="font-size: 22px;" class="fab fa-facebook"></i> -->
                </a>
                <a
                    href={instagram}
                    class="text-white hover:text-aftgroup dark:hover:text-white"
                >
                    <img src="/images/bxl_instagram-alt.png" alt="">
                    <!-- <i style="font-size: 23px;" class="fab fa-instagram"></i> -->
                </a>
            </div>
        </div>
        <ul class="flex lg:flex-wrap space-y-2 lg:justify-between flex-col lg:flex-row items-center my-8 text-white dark:text-white">
            <li>
                <a href="/services" class="mr-2 font-bold hover:underline md:mr-2">Nos services</a>
            </li>
            <li>
                <a href="/formations" class="mr-2 font-bold hover:underline md:mr-2">Nos formations</a>
            </li>
            <li>
                <a href="/devis" class="mr-2 font-bold hover:underline md:mr-2">Demander un devis</a>
            </li>
        </ul>
        <p class="my-6 font-medium text-white dark:text-gray-400">
            <a class="hover:underline" href="/">Conditions d'utilisation</a>|<a class="hover:underline" href="/">Mentions légales</a>|<a class="hover:underline" href="/">Politique de confidentialité</a> 
        </p>
        <span class="text-sm font-bold text-white sm:text-center dark:text-gray-400">
            Copyright © {(new Date()).getFullYear()} | Made by AFT GROUP
        </span>
    </div>
</footer>
