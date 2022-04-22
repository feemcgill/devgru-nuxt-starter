<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      scrolltrigger_initiated: false,
      fade_up_els: [],
      slide_up_enter_els: [],
      slide_up_enter_half_els: [],
      slide_up_leave_els: [],
      animate_in_class_els: [],
    };
  },
  mounted() {
    // Restart header animations upon return to page
    if (this.scrolltrigger_initiated) {
      this.animate_in_class_els.forEach((el) => {
        if (el.classList.contains("animate-in")) {
          el.classList.remove("animate-in");
          setTimeout(() => {
            el.classList.add("animate-in");
          }, 250);
        }
      });
    }

    setTimeout(() => {
      this.scrollTriggerInit();
    }, 1000);
  },
  methods: {
    scrollTriggerInit() {
      if (!this.scrolltrigger_initiated && process.client) {
        this.scrolltrigger_initiated = true;

        // Fade In & Slide Up
        this.fade_up_els = document.querySelectorAll("[data-st-fade_up]");
        this.fade_up_els.forEach(this.add_fade_up_animation);

        // Slide Up Enter - scrub
        this.slide_up_enter_els = document.querySelectorAll(
          "[data-st-slide_up_enter]"
        );
        this.slide_up_enter_els.forEach(this.add_slide_up_enter_animation);

        // Slide Up Enter Half - scrub
        this.slide_up_enter_half_els = document.querySelectorAll(
          "[data-st-slide_up_enter_half]"
        );
        this.slide_up_enter_half_els.forEach(
          this.add_slide_up_enter_half_animation
        );

        // Slide Down Enter - scrub
        this.slide_down_enter_els = document.querySelectorAll(
          "[data-st-slide_down_enter]"
        );
        this.slide_down_enter_els.forEach(this.add_slide_down_enter_animation);

        // Animate In Class elements
        this.animate_in_class_els = document.querySelectorAll(
          "[data-st-animate_in_class]"
        );
        this.animate_in_class_els.forEach(this.toggle_animate_in_class);
      }
    },
    add_fade_up_animation(el, index) {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            ease: "power2",
            toggleActions: "play none none none",
          },
        })
        .from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
        });
    },
    add_slide_up_enter_animation(el, index) {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.1,
          },
        })
        .from(el, {
          y: "7vw",
          ease: "none",
        });
    },
    add_slide_up_enter_half_animation(el, index) {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "center center",
            scrub: 0.1,
          },
        })
        .from(el, {
          y: "7vw",
          ease: "none",
        });
    },
    add_slide_down_enter_animation(el, index) {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.1,
          },
        })
        .from(el, {
          y: "-7vw",
          ease: "none",
        });
    },
    toggle_animate_in_class(el, index) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          onEnter: () => {
            el.classList.add("animate-in");
          },
        },
      });
    },
  },
};
</script>
