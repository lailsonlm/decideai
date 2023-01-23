import { Variants } from "framer-motion"

export const headerFadeInUp: Variants = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.3, 
      ease: "easeIn",
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.3,
      ease: "easeOut"
    }
  }
}

export const headerFadeInDown: Variants = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.4, 
      ease: "easeIn"
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: "easeIn"
    }
  }
}

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.4, 
      ease: "easeIn"
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.8,
      ease: "easeIn"
    }
  }
}

export const fadeInLeft: Variants = {
  initial: {
    x: -60,
    opacity: 0,
    transition: {
      duration: 0.4, 
      ease: "easeIn"
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: "easeIn"
    }
  }
}

export const fadeInRight: Variants = {
  initial: {
    x: 60,
    opacity: 0,
    transition: {
      duration: 0.4, 
      ease: "easeIn"
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
}

export const fadeInUp: Variants = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.4, 
      ease: "easeIn"
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: "easeOut"
    }
  }
}

export const fadeInDown: Variants = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.4, 
      ease: "easeIn"
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: "easeIn"
    }
  }
}