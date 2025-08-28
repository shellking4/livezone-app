import { pocketbase } from "$lib/commons/rest";
import { pbAuth } from "$lib/commons/utils";

export const csr = true;
export const ssr = false;

const getHomePageData = async () => {
    const homePageSections = await pocketbase.collection('home_page_sections').getFullList({
        sort: '-created',
    });
    return homePageSections;
}

const getServicesData = async () => {
    const services = await pocketbase.collection('services').getFullList({
        sort: '-created',
    });
    return services;
}

const getProductsData = async () => {
    const products = await pocketbase.collection('products').getFullList({
        sort: '-created',
    });
    return products;
}

const getSocialMediaLinksData = async () => {
    const links = await pocketbase.collection('social_media_links').getFullList({
        sort: '-created',
    });
    return links;
}

const getServicesPageData = async () => {
    const tab1Data = (await pocketbase.collection('services_page_sections').getList(1, 100, {
        filter: 'tab="tab1"',
        expand: 'items'
    })).items;
    const tab2Data = (await pocketbase.collection('services_page_sections').getList(1, 100, {
        filter: 'tab="tab2"',
        expand: 'items'
    })).items;
    const tab3Data = (await pocketbase.collection('services_page_sections').getList(1, 100, {
        filter: 'tab="tab2"',
        expand: 'items'
    })).items;

    return {
        tab1Data,
        tab2Data,
        tab3Data
    };
}

const getServicesPageDataAlt = async () => {
    const data = await pocketbase.collection('services_page_sections').getFullList({
        expand: 'items'
    });
    return data;
}

const getTrainingsPageData = async () => {
    const data = await pocketbase.collection('trainings_page_sections').getFullList();
    return data;
}

const getEstimatePageData = async () => {
    const data = await pocketbase.collection('estimate_page_sections').getFullList();
    return data;
}

const getEstimateQuestions = async () => {
    const data = await pocketbase.collection('estimate_questions').getFullList();
    return data;
}

export const load = async () => {
    if (!pocketbase.authStore.isValid) {
        await pbAuth();
    }
    return {
        homePageData: getHomePageData(),
        services: getServicesData(),
        products: getProductsData(),
        socialMediaLinks: getSocialMediaLinksData(),
        servicesPageData: getServicesPageDataAlt(),
        servicesPageDataByTab: getServicesPageData(),
        trainingsPageData: getTrainingsPageData(),
        estimatePageData: getEstimatePageData(),
        estimateQuestions: getEstimateQuestions(),
    }
}