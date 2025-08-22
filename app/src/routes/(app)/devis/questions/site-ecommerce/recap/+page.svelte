<script lang="ts">
    import { createdEstimate } from "$lib/commons/stores";

    const estimate = $createdEstimate;

    let XOF = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
    });
</script>

<div class="bg-gray-200">
    <section
        style="background: linear-gradient( rgba(52,97,171, 0.9), rgba(52,97,171, 0.9) ), url('/images/concept-rpa-ecran-tactile-flou-main_23-2149311914.jpg') no-repeat; background-size: cover; padding-bottom: 20px;"
        class="p-4 bg-aftgroup md:p-8 lg:p-10"
    >
        <div class="grid max-w-screen-md px-1 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="text-center lg:col-span-12">
                <h1 class="max-w-full mb-4 text-white lg:text-2xl text-lg font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
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
    <div
        class="px-4 lg:w-full max-w-screen-xl lg:mx-auto mx-3 mt-10 lg:py-4 py-4 bg-white border border-white rounded-3xl shadow sm:p-16 dark:bg-gray-800 dark:border-gray-700"
    >
        <img
            class="ml-auto"
            style="height: 30px; width: 30px"
            src="/images/Group 162533.png"
            alt=""
        />
        <p
            class="mb-5 lg:text-lg text-md text-gray-900 font-normal mt-4 sm:text-lg dark:text-black-900"
        >
            RÉCAPITULATIF
        </p>
        <div class="divide-y-[12px] divide-slate-400/[.24]">
            <div />
            <div />
        </div>
        <h5
            class="mb-5 mt-[15px] lg:text-2xl text-md lg:text-left text-center font-bold text-gray-900 dark:text-white"
        >
            Estimation tarifaire pour la création de votre site e-commerce
        </h5>
        <p
            class="mb-5 text-lg text-gray-900 font-normal mt-4 sm:text-lg dark:text-black-900"
        />

        <div class="mt-[4em]" />

        <div class="relative overflow-x-auto">
            <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
                <tbody>
                    {#if $createdEstimate.details.questions?.length > 0 }
                        {#each $createdEstimate.details.questions as question}
                            <tr class="bg-white border-b border-b-gray-400 dark:bg-gray-800 dark:border-gray-900">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-normal lg:text-2xl text-sm text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {question.outline}
                                </th>
                                <td class="px-6 py-4 lg:text-2xl text-sm">
                                    {question.answer}
                                </td>
                            </tr>
                        {/each}
                    {/if }
                </tbody>
            </table>
        </div>
        <div class="flex px-2 mt-8 justify-between">
            <p class="flex ml-auto font-bold lg:text-lg text-md">TOTAL HT: {XOF.format($createdEstimate.amount)}</p>
        </div>
    </div>


    <img
        class="w-10 h-15 md:w-30 md:h-30"
        src="/images/Group 162556.png"
        alt=""
    />
    <div class="py-4" />
</div>
