<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { estimateData } from "$lib/commons/stores";

    let questionNumber = 'question_3'

    let question = $page.data.estimateQuestions.find((item: any) => item.number === questionNumber);

    const priceDetails: any[] = Object.entries(question.pricing_details)

    const handleNext = () => {
        let pagesNumber = (document.querySelector('select[name="pagesNumber"]') as HTMLInputElement).value;
        let estimateRecap = $estimateData
        let data = {
            question: questionNumber,
            outline: `Nombre de page`,
            answer: `${pagesNumber}`,
            price: (function () {
                let price = 0;
                for (let i = 0; i < priceDetails.length; i++) {
                    if ((priceDetails[i][0] as string).toLowerCase().includes(pagesNumber)) {
                        const pagesNumber = parseInt(priceDetails[i][0])
                        if (pagesNumber < 1) {
                            price = 0;
                        } else if (pagesNumber <= 5) {
                            price = 0;
                        } else {
                            price = 10000 + (pagesNumber - 6) * 10000;
                        }
                        break
                    }
                }
                return price;
            })()
        }
        const questionIndex = estimateRecap.questions.indexOf(estimateRecap.questions.find((item: any) => item.question === questionNumber));
        estimateRecap.questions[questionIndex] = data;
        estimateData.set(estimateRecap);
        goto("/devis/questions/site-vitrine/step-4")
    }

</script>
<div class="bg-gray-200">
    <section 
        style="background: linear-gradient( rgba(52,97,171, 0.9), rgba(52,97,171, 0.9) ), url('/images/concept-rpa-ecran-tactile-flou-main_23-2149311914.jpg') no-repeat; background-size: cover; padding-bottom: 20px;"
        class="p-4 bg-aftgroup md:p-8 lg:p-10">
        <div class="grid max-w-screen-md px-1 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="text-center lg:col-span-12">
                <h1 class="max-w-full mb-4 text-white text-xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                    Quel prix pour un site vitrine ?
                </h1>
            </div>
        </div>
    </section>
    <img
        class="w-10 h-15 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />
    <div class="px-4 lg:w-full max-w-screen-xl lg:mx-auto mx-3 mt-10 lg:py-4 py-2 bg-white border border-white rounded-3xl shadow sm:p-16 dark:bg-gray-800 dark:border-gray-700">
        <img
            class="ml-auto"
            style="height: 30px; width: 30px"
            src="/images/Group 162533.png"
            alt=""
        />
        <p class="mb-5 text-md lg:text-lg text-gray-900 font-normal mt-4 sm:text-lg dark:text-black-900">QUESTION 3 SUR 11</p>
        <div class="divide-y-[12px] divide-slate-400/[.24]">
            <div></div><div></div>
        </div>
        <h5 class="mb-5 mt-[15px] text-md lg:text-2xl font-bold lg:text-left text-center text-gray-900 dark:text-white">Nombre de page</h5>
        <p class="mb-5 lg:text-lg text-sm text-gray-900 font-normal mt-4 dark:text-black-900">Indiquez ici le nombre de page souhaité pour votre site internet. Les pages: "contact" et "mentions légales" ne doivent pas être comptabilisées.(ex: Accueil + Nos produits + Nos réalisations + Nos références + Contact = 4 pages)</p>
        <div class="divide-y-[12px]">
        </div>

        <div class="mt-[4em]"></div>

        <select id="pagesNumber" name="pagesNumber" class="flex px-10 bg-gray-100 block w-full px-4 py-3 lg:py-4 text-base text-gray-900 rounded-3xl border border-gray-300 focus:ring-gray-300 focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected value=1>01 page Accueil seule</option>
            <option value=2>02 pages</option>
            <option value=3>03 pages</option>
            <option value=4>04 pages</option>
            <option value=5>05 pages</option>
            <option value=6>06 pages</option>
            <option value=7>07 pages</option>
            <option value=8>08 pages</option>
            <option value=9>09 pages</option>
            <option value=10>10 pages</option>
            <option value=11>11 pages</option>
            <option value=12>12 pages</option>
            <option value=13>13 pages</option>
            <option value=14>14 pages</option>
            <option value=15>15 pages</option>
            <option value=16>16 pages</option>
            <option value=17>17 pages</option>
            <option value=18>18 pages</option>
            <option value=19>19 pages</option>
            <option value=20>20 pages</option>


        </select>

        <div class="mt-5"></div>

        <!-- submit -->
        <div class="mt-16"></div>

        <div class="flex justify-between">
            <button on:click={() => { goto("/devis/questions/site-vitrine/step-2") }} class="flex lg:text-md text-sm lg:px-10 px-7 py-3 text-gray-800 border-2 border-aftgroup hover:bg-aftgroup hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Précédent</button>

            <button on:click={handleNext} class="flex lg:text-md text-sm lg:px-10 px-7 py-3 text-white bg-aftgroup hover:bg-aftgroup focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-md lg:px-16 px-8 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Suivant</button>
        </div>
    </div>
    <img
        class="w-10 h-15 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />
    <div class="py-4"></div>
</div>