<script lang="ts">
    import { goto } from "$app/navigation";
    import { estimateData } from "$lib/commons/stores";
    import { SolutionType } from "$lib/commons/types";
    

    const handleNext = () => {
        let solutionType = (document.querySelector('input[name="solution-type"]:checked') as HTMLInputElement).value;
        estimateData.set({ ...$estimateData, solutionType: solutionType, questions: [
            { question: 'question_1' },
            { question: 'question_2' },
            { question: 'question_3' },
            { question: 'question_4' },
            { question: 'question_5' },
            { question: 'question_6' },
            { question: 'question_7' },
            { question: 'question_8' },
            { question: 'question_9' },
            { question: 'question_10' },
            { question: 'question_11' },
            { question: 'question_12' },
            { question: 'question_13' },
            { question: 'question_14' },
            { question: 'question_15' },
            { question: 'question_16' },
            { question: 'question_17' },
            { question: 'question_18' },
            { question: 'question_19' },
            { question: 'question_20' },
        ] });
        if (solutionType === SolutionType.SITE_VITRINE) {
            goto("/devis/questions/site-vitrine/step-1");
        } else if (solutionType === SolutionType.SITE_E_COMMERCE) {
            goto("/devis/questions/site-ecommerce/step-1");
        } else {
            goto("/devis/questions/logiciel");
        }
    }
</script>
<div class="bg-gray-200">
    <section 
        style="background: linear-gradient( rgba(52,97,171, 0.9), rgba(52,97,171, 0.9) ), url('/images/concept-rpa-ecran-tactile-flou-main_23-2149311914.jpg') no-repeat; background-size: cover; padding-bottom: 20px;"
        class="p-4 bg-aftgroup md:p-8 lg:p-10">
        <div class="grid max-w-screen-md px-1 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="text-center lg:col-span-12">
                <h1 class="max-w-full mb-4 text-white text-xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
                    Quel prix pour un site internet professionnel ?
                </h1>
            </div>
        </div>
    </section>
    
    <div class="px-4 mx-3 lg:mx-auto lg:w-full max-w-screen-xl mt-10 lg:py-4 py-4 bg-white border border-white rounded-3xl shadow sm:p-16 dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-5 text-md text-gray-900 mt-4 lg:text-lg dark:text-black-900">QUESTION 0</p>
        <div class="divide-y-[12px] divide-slate-400/[.24]">
            <div></div><div></div>
        </div>
        <h5 class="mb-5 mt-[15px] text-md lg:text-2xl font-bold text-gray-900 dark:text-white">Quel type de site internet souhaitez-vous ?</h5>
        <div class="divide-y-[12px]">
        </div>

        <div class="mt-[4em]"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input checked={true}  id="vitrine" type="radio" value="site vitrine" name="solution-type" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="vitrine" class="w-full py-2 lg:py-4 lg:px-7 px-1 ml-2 text-sm lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Site vitrine</label>
        </div>

        <div class="mt-5"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input id="ecommerce" type="radio" value="site e-commerce" name="solution-type" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="ecommerce" class="w-full py-2 lg:py-4 lg:px-7 px-1 ml-2 text-sm lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Site e-commerce</label>
        </div>

        <div class="mt-5"></div>

        <div class="flex items-center pl-4 py-1 bg-gray-100 border border-gray-300 rounded-3xl dark:border-gray-700">
            <input id="software" type="radio" value="logiciel / application" name="solution-type" class="lg:w-7 lg:h-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="software" class="w-full lg:py-4 py-2 lg:px-7 px-1 ml-2 text-sm lg:text-2xl font-normal text-gray-900 dark:text-gray-300">Logiciel / Application</label>
        </div>

        <div class="lg:mt-20 mt-8"></div>

        <div class="flex justify-end">
            <button on:click={handleNext} class="flex text-white bg-aftgroup hover:bg-aftgroup focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md lg:text-md text-sm lg:px-10 px-7 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Suivant</button>
        </div>
    </div>

    <div class="py-4"></div>
</div>