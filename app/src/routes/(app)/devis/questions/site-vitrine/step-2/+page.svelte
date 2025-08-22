<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { estimateData } from "$lib/commons/stores";

    let questionNumber = 'question_2'

    let question = $page.data.estimateQuestions.find((item: any) => item.number === questionNumber);

    const priceDetails: any[] = Object.entries(question.pricing_details)

    const handleNext = () => {
        let designInquiryAnswer = (document.querySelector('input[name="design"]:checked') as HTMLInputElement).value;
        let estimateRecap = $estimateData
        let data = {
            question: questionNumber,
            outline: `Souhaitez-vous avoir une maquette ?`,
            answer: `${designInquiryAnswer}`,
            price: (function () {
                let price = 0;
                for (let i = 0; i < priceDetails.length; i++) {
                    if ((priceDetails[i][0] as string).toLowerCase().includes(designInquiryAnswer)) {
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
        goto("/devis/questions/site-vitrine/step-3")
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
    <div class="px-4 lg:w-full max-w-screen-xl mx-3 lg:mx-auto mt-10 lg:py-4 py-4 bg-white border border-white rounded-3xl shadow sm:p-16 dark:bg-gray-800 dark:border-gray-700">
        <img
            class="ml-auto"
            style="height: 30px; width: 30px"
            src="/images/Group 162533.png"
            alt=""
        />
        <p class="mb-5 text-md lg:text-2xl text-gray-900 font-normal mt-4 dark:text-black-900">QUESTION 2 SUR 11</p>
        <div class="divide-y-[12px] divide-slate-400/[.24]">
            <div></div><div></div>
        </div>
        <h5 class="mb-5 mt-[15px] lg:text-2xl text-md lg:text-left text-center font-bold text-gray-900 dark:text-white">Souhaitez-vous avoir une maquette ?</h5>
        <p class="mb-5 text-sm lg:text-lg text-gray-900 font-normal mt-4 dark:text-black-900">Une maquette de site web est le résultat de plusieurs étapes de création pour fournir une représentation graphique de l'agencement d'un site internet. La maquette web va représenter ce à quoi va ressembler le futur site internet</p>
        <div class="divide-y-[12px]">
        </div>

        <div class="mt-[4em]"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input checked={true} id="yes" type="radio" value="oui" name="design" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="yes" class="w-full py-2 lg:py-4 lg:px-7 px-1 ml-2 text-md lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Oui</label>
        </div>

        <div class="mt-5"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input id="no" type="radio" value="non" name="design" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="no" class="w-full py-2 lg:py-4 lg:px-7 px-1 ml-2 text-md lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Non</label>
        </div>

        <div class="mt-5"></div>

        <!-- submit -->
        <div class="mt-16"></div>

        <div class="flex justify-between">
            <button on:click={() => { goto("/devis/questions/site-vitrine/step-1") }} class="flex lg:text-md text-sm lg:px-10 px-7 py-3 text-gray-800 border-2 border-aftgroup hover:bg-aftgroup hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Précédent</button>

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