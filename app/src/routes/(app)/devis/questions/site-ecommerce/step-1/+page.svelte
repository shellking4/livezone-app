<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { estimateData } from "$lib/commons/stores";

    let questionNumber = 'question_12'

    let question = $page.data.estimateQuestions.find((item: any) => item.number === questionNumber);

    const priceDetails: any[] = Object.entries(question.pricing_details)

    const handleNext = () => {
        let siteType = (document.querySelector('input[name="site-type"]:checked') as HTMLInputElement).value;
        let estimateRecap = $estimateData
        let data = {
            question: questionNumber,
            outline: `Quel type de site e-commerce souhaitez-vous ?`,
            answer: (function() {
                if (`${siteType}` === "prestashop") {
                    return "Prestashop";
                } else if (`${siteType}` === "personnalise") {
                    return "Personnalisé";
                } else {
                    return "Prestashop";
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
        goto("/devis/questions/site-ecommerce/step-2")
    }
</script>


<div class="bg-gray-200">
    <section 
        style="background: linear-gradient( rgba(52,97,171, 0.9), rgba(52,97,171, 0.9) ), url('/images/concept-rpa-ecran-tactile-flou-main_23-2149311914.jpg') no-repeat; background-size: cover; padding-bottom: 20px;"
        class="p-4 bg-aftgroup md:p-8 lg:p-10">
        <div class="grid max-w-screen-md px-1 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="text-center lg:col-span-12">
                <h1 class="max-w-full mb-4 text-white text-xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                    Quel prix pour un site e-commerce ?
                </h1>
            </div>
        </div>
    </section>
    <img
        class="w-10 h-15 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />
    <div class="px-4 lg:w-full max-w-screen-xl lg:mx-auto mx-3 mt-10 lg:py-4 py-4 bg-white border border-white rounded-3xl shadow sm:p-16 dark:bg-gray-800 dark:border-gray-700">
        <img
            class="ml-auto"
            style="height: 30px; width: 30px"
            src="/images/Group 162533.png"
            alt=""
        />
        <p class="mb-5 lg:text-lg text-md text-gray-900 font-normal mt-4 sm:text-lg dark:text-black-900">QUESTION 1 SUR 5</p>
        <div class="divide-y-[12px] divide-slate-400/[.24]">
            <div></div><div></div>
        </div>
        <h5 class="mb-5 mt-[15px] text-md lg:text-2xl font-bold lg:text-left text-center text-gray-900 dark:text-white">Quel type de site e-commerce souhaitez-vous ?</h5>
        <div class="divide-y-[12px]">
        </div>

        <div class="mt-[4em]"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input checked id="prestashop" type="radio" value="prestashop" name="site-type" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="prestashop" class="w-full lg:py-4 py-2 lg:px-7 px-1 ml-2 text-md lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Prestashop</label>
        </div>

        <div class="mt-5"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input id="personnalise" type="radio" value="personnalise" name="site-type" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="personnalise" class="w-full lg:py-4 py-2 lg:px-7 px-1 ml-2 text-md lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Personnalisé</label>
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