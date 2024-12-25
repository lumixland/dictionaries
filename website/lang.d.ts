export interface LangContent {
  index: {
    verifiedBot: string;
    title: string;
    description: string;
    install: string;
    learnMore: string;
    trustedBy: string;
    members: string;
    runAnimation: string;
    playingAnimation: string;
  };
  "not-found": {
    title: string;
    description: string;
    back: string;
    support: string;
  };
  error: {
    title: string;
    description: string;
    tryAgain: string;
    support: string;
  };
  tutorials: {
    title: string;
    categories: {
      tutorialTypes: {
        SERVER_MANAGEMENT: string;
        ECONOMY: string;
        MODERATION: string;
        FUN: string;
        MUSIC: string;
        LEVELING: string;
        WELCOME: string;
        GOODBYE: string;
        REACTION_ROLES: string;
        TICKET: string;
        SUGGESTION: string;
        REPORT: string;
        ANNOUNCEMENT: string;
        POLL: string;
        GIVEAWAY: string;
        SHOP: string;
        BOOSTER: string;
        JOB: string;
      };
    };
    noResults: string;
  };
  tutorial: {
    lastUpdated: string;
    edit: string;
    onThisPage: string;
  };
  premium: {
    title: string;
    description: string;
    save: string;
    perMonth: string;
    subscribe: string;
    subscribedTo: string;
    plans: {
      monthly: {
        name: string;
        billedAt: string;
        features: {
          "Higher-message-limit": string;
          "Custom-emojis": string;
          "Priority-support": string;
          "Access-to-beta-features": string;
        };
      };
      yearly: {
        name: string;
        billedAt: string;
        features: {
          "Higher-message-limit": string;
          "Custom-emojis": string;
          "Priority-support": string;
          "Access-to-beta-features": string;
        };
      };
    };
  };
  dashboard: {
    "server-select": {
      title: string;
      description: string;
      manage: string;
      setup: string;
    };
  };
  modals: {
    leavingLumix: {
      title: string;
      description: string;
      cancel: string;
      continue: string;
    };
    imageView: {
      close: string;
    };
    editTutorial: {
      tabs: {
        edit: string;
        titlePlaceholder: string;
        topicsPlaceholder: string;
        tutorialTypes: {
          SERVER_MANAGEMENT: string;
          ECONOMY: string;
          MODERATION: string;
          FUN: string;
          MUSIC: string;
          LEVELING: string;
          WELCOME: string;
          GOODBYE: string;
          REACTION_ROLES: string;
          TICKET: string;
          SUGGESTION: string;
          REPORT: string;
          ANNOUNCEMENT: string;
          POLL: string;
          GIVEAWAY: string;
          SHOP: string;
          BOOSTER: string;
          JOB: string;
        };
        preview: string;
      };
      save: string;
      cancel: string;
    };
  };
  "footer-banner": {
    title: string;
    description: string;
    install: string;
    majoexe: string;
  };
  footer: {
    resources: string;
    github: string;
    tutorials: string;
    support: string;
    dashboard: string;
    premium: string;
    install: string;
    legal: string;
    privacyPolicy: string;
    termsOfService: string;
    allRightsReserved: string;
    empowerDescription: string;
    servicesOperational: string;
    servicesDown: string;
  };
  header: {
    features: string;
    servers: string;
    premium: string;
    login: string;
    logout: string;
    myServers: string;
    transferPremium: string;
    supportServer: string;
    tutorials: string;
  };
}
