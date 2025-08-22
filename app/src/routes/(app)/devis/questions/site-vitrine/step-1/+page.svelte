<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { estimateData } from "$lib/commons/stores";

    let questionNumber = 'question_1'

    let question = $page.data.estimateQuestions.find((item: any) => item.number === questionNumber);

    const priceDetails: any[] = Object.entries(question.pricing_details)

    const handleNext = () => {
        let siteType = (document.querySelector('input[name="site-type"]:checked') as HTMLInputElement).value;
        let estimateRecap = $estimateData
        let data = {
            question: questionNumber,
            outline: `Quel type de site vitine souhaitez-vous ?`,
            answer: (function() {
                if (`${siteType}` === "mesure") {
                    return "Sur mesure";
                } else if (`${siteType}` === "template") {
                    return "Template";
                } else if (`${siteType}` === "personnalisation") {
                    return "Personnalisation de template";
                } else {
                    return "Sur mesure";
                }
            })(),
            price: (function () {
                let price = 0;
                for (let i = 0; i < priceDetails.length; i++) {
                    if ((priceDetails[i][0] as string).toLowerCase().includes(siteType)) {
                        price = priceDetails[i][1];
                        break
                    }
                }
                return price;
            })()
        }
        const questionIndex = estimateRecap.questions.indexOf(estimateRecap.questions.find((item: any) => item.question === questionNumber));
        estimateRecap.questions[questionIndex] = data;
        estimateData.set(estimateRecap);
        goto("/devis/questions/site-vitrine/step-2")
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
    <div class="px-4 mx-3 lg:mx-auto lg:w-full max-w-screen-xl mt-10 lg:py-4 py-4 bg-white border border-white rounded-3xl shadow sm:p-16 dark:bg-gray-800 dark:border-gray-700">
        <img
            class="ml-auto"
            style="height: 30px; width: 30px"
            src="/images/Group 162533.png"
            alt=""
        />
        <p class="mb-5 text-md lg:text-2xl text-gray-900 font-normal mt-4 dark:text-black-900">QUESTION 1 SUR 11</p>
        <div class="divide-y-[12px] divide-slate-400/[.24]">
            <div></div><div></div>
        </div>
        <h5 class="mb-5 mt-[15px] text-md lg:text-left text-center lg:text-2xl font-bold text-gray-900 dark:text-white">Quel type de site vitine souhaitez-vous ?</h5>
        <div class="divide-y-[12px]">
        </div>

        <div class="mt-[4em]"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input checked id="mesure" type="radio" value="mesure" name="site-type" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="mesure" class="w-full py-2 lg:py-4 lg:px-7 px-2 ml-2 text-sm lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Entièrement sur mesure</label>
        </div>

        <div class="mt-5"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input id="template" type="radio" value="template" name="site-type" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="template" class="w-full py-2 lg:py-4 lg:px-7 px-2 ml-2 text-sm lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Template</label>
        </div>

        <div class="mt-5"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input id="personnalisation" type="radio" value="personnalisation" name="site-type" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="personnalisation" class="w-full py-2 lg:py-4 lg:px-7 px-2 ml-2 text-sm lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Personnalisation d'un template</label>
        </div>

        <div class="mt-5"></div>

        <!-- submit -->
        <div class="mt-16"></div>

        <div class="flex justify-between">
            <button on:click={() => { goto("/devis/questions/step-0") }} class="flex lg:text-md text-sm lg:px-10 px-7 py-3 text-gray-800 border-2 border-aftgroup hover:bg-aftgroup hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Précédent</button>

            <button on:click={handleNext} class="flex lg:text-md text-sm lg:px-10 px-7 py-3 text-white bg-aftgroup hover:bg-aftgroup focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Suivant</button>
        </div>
    </div>
    <img
        class="w-10 h-15 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />
    <div class="py-4"></div>
</div>