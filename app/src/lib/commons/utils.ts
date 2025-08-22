import { get } from 'svelte/store';
import { pocketbase } from './rest';
import { PUBLIC_POCKETBASE_ADMIN_PASSWORD, PUBLIC_POCKETBASE_ADMIN_USERNAME } from '$env/static/public';
import { page } from '$app/stores';
import 'animate.css';
import Swal from "sweetalert2";

export const getPageSectionItem = (section: string) => {
    const item = (get(page)?.data?.homePageData as any[])?.find(item => item.section === `${section}`)
    return item?.content;
}

export const getHomePageSectionFile = (section: string) => {
    const item = (get(page)?.data?.homePageData as any[])?.find(item => item.section === `${section}`)
    return pocketbase.files.getUrl(item, item?.image);
}

export const getSocialMediaLink = (socialMedia: string) => {
    const item = (get(page)?.data?.socialMediaLinks as any[])?.find(item => item.social_media === `${socialMedia}`)
    return item.link;
}

export const getRecordFile = async (record: any, fileProp: string) => {
    return pocketbase.files.getUrl(record, record[fileProp]);
}

export const getServiceBySection = (section: string) => {
    const service = (get(page).data.servicesPageData as any[]).find(item => item.section === `${section}`)
    return service;
}

export const getTrainingBySection = (section: string) => {
    const training = (get(page).data.trainingsPageData as any[]).find(item => item.section === `${section}`)
    return training;
}

export const getEstimatePageItemBySection = (section: string) => {
    const item = (get(page).data.estimatePageData as any[]).find(item => item.section === `${section}`)
    return item.content;
}

export const pbAuth = async () => {
    await pocketbase.admins.authWithPassword(PUBLIC_POCKETBASE_ADMIN_USERNAME, PUBLIC_POCKETBASE_ADMIN_PASSWORD);
    return;
}

export const swalAnimation = {
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
}

export const toastFailure = (props: { title: string, details: string }) => {
    Swal.fire(
        {
            title: props.title,
            text: props.details,
            showConfirmButton: false,
            icon: "warning",
            toast: true,
            timer: 4000,
            position: "top-right",
            ...swalAnimation
        }
    );
}

export const toastSuccess = (props: { title: string, details?: string }) => {
    Swal.fire(
        {
            title: props.title,
            text: props.details,
            showConfirmButton: false,
            icon: "success",
            toast: true,
            timer: 1500,
            position: "top-right",
            ...swalAnimation
        }
    );
}


export const duplicateItems = (arr: any, numberOfRepetitions: any) => arr.flatMap((i: any) => Array.from({ length: numberOfRepetitions }).fill(i));

