<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        onClose: any;
        selectedService?: string;
    }

    export let onClose: any;
    export let selectedService: string = "recording";
    let calContainer: HTMLElement;
    let isLoaded = false;

    // Cal.com configuration based on service type
    const calConfigs: any = {
        recording: {
            calLink: "livezone/recording-studio",
            title: "Book Recording Studio Time",
        },
        rehearsal: {
            calLink: "livezone/rehearsal-space",
            title: "Book Rehearsal Space",
        },
        masterclass: {
            calLink: "livezone/masterclass",
            title: "Book Masterclass Session",
        },
        courses: {
            calLink: "livezone/music-courses",
            title: "Book Music Course",
        },
        live: {
            calLink: "livezone/live-performance",
            title: "Book Live Performance Slot",
        },
    };

    let currentConfig = calConfigs[selectedService] || calConfigs.recording;
</script>

<svelte:head>
    <script type="text/javascript">
		(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
		Cal("init", "rehearsal", { origin: "https://app.cal.com" });

		Cal.ns.rehearsal("inline", {
			elementOrSelector: "#my-cal-inline-rehearsal",
			config: { "layout": "month_view" },
			calLink: "donald-kanti-uylbk2/rehearsal",
		});

		Cal.ns.rehearsal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
	</script>
</svelte:head>

<!-- Backdrop -->
<div
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center p-4"
>
    <!-- Modal -->
    <div
        class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
    >
        <!-- Header -->
        <div
            class="flex justify-between items-center p-6 border-b border-gray-200"
        >
            <div>
                <h3 class="text-2xl font-bold text-gray-900">
                    {currentConfig.title}
                </h3>
                <p class="text-gray-600 text-sm mt-1">
                    Select your preferred date and time
                </p>
            </div>
            <!-- Updated from onclick to on:click for Svelte 4 -->
            <button
                on:click={onClose}
                class="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close booking modal"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </button>
        </div>

        <!-- Cal.com Embed Container -->
        <div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline-rehearsal"></div>

        <!-- Footer with additional info -->
        <div class="p-6 border-t border-gray-200 bg-gray-50">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 text-sm text-gray-600">
                    <div class="flex items-center">
                        <div
                            class="w-2 h-2 bg-green-500 rounded-full mr-2"
                        ></div>
                        Available
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Booked
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Custom styling for Cal.com embed to match light theme */
    :global(.cal-embed-container iframe) {
        border-radius: 0;
        background: #ffffff;
    }

    /* Override Cal.com default styles for light theme */
    :global(.cal-embed-container) {
        --cal-brand-color: #8b5cf6;
        --cal-brand-text-color: #ffffff;
        --cal-bg: #ffffff;
        --cal-bg-muted: #f9fafb;
        --cal-text: #111827;
        --cal-text-muted: #6b7280;
        --cal-border: #e5e7eb;
    }
</style>
