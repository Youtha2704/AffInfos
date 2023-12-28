import TabLinkType from "@/types/tabLinks";

export const INFO_MANAGE_PATH:string = "/dashboard/gestion-des-informations" 
export const INFO_MANAGE_LINKS:Array<TabLinkType> = [
    {
        label: "Défaut",
        href: `${INFO_MANAGE_PATH}`
    },
    {
        label: "Gestion",
        href: `${INFO_MANAGE_PATH}/gestion`
    }
]