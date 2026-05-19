// Front-end online auction room data. This file augments ARTIFACTS when it is
// loaded after data/artifacts.js; all auction values are simulated for v0.5.
(function () {
  const eventId = "london-2026-online-auction";
  const currency = "GBP";
  const buyerPremiumRate = 0.25;
  const onlineServiceRate = 0.01;
  const softCloseThresholdMinutes = 3;
  const softCloseExtensionMinutes = 3;

  const bidIncrementTable = [
    { min: 0, max: 1000, increment: 50, label: "Under £1,000" },
    { min: 1000, max: 2000, increment: 100, label: "£1,000 - £1,999" },
    { min: 2000, max: 5000, increment: 250, label: "£2,000 - £4,999" },
    { min: 5000, max: 10000, increment: 500, label: "£5,000 - £9,999" },
    { min: 10000, max: 20000, increment: 1000, label: "£10,000 - £19,999" },
    { min: 20000, max: 50000, increment: 2000, label: "£20,000 - £49,999" },
    { min: 50000, max: 100000, increment: 5000, label: "£50,000 - £99,999" },
    { min: 100000, max: Infinity, increment: 10000, label: "£100,000+" },
  ];

  const lotData = [
    {
      artifactId: "xu-jiegen-listening",
      lotNo: "LOT 01",
      estimateLow: 12000,
      estimateHigh: 18000,
      openingBid: 9000,
      currentPrice: 18000,
      reserveStatus: "Reserve Met",
      lotState: "Closed",
      bidderAccessStatus: "Demo Approved",
      conditionReportStatus: "Ready for Preview",
      bidderLabel: "Bidder 042",
      bidCount: 8,
      absenteeBidCount: 3,
      watchCount: 38,
      closeOffsetSeconds: 0,
    },
    {
      artifactId: "jiang-haiming-dawn-dusk",
      lotNo: "LOT 02",
      estimateLow: 24000,
      estimateHigh: 32000,
      openingBid: 18000,
      currentPrice: 34000,
      reserveStatus: "Reserve Met",
      lotState: "Closed",
      bidderAccessStatus: "Demo Approved",
      conditionReportStatus: "Ready for Preview",
      bidderLabel: "Bidder 118",
      bidCount: 10,
      absenteeBidCount: 4,
      watchCount: 54,
      closeOffsetSeconds: 0,
    },
    {
      artifactId: "huang-wei-ceremonial-robe",
      lotNo: "LOT 03",
      estimateLow: 38000,
      estimateHigh: 55000,
      openingBid: 32000,
      currentPrice: 50000,
      reserveStatus: "Reserve Not Met",
      lotState: "Live Now",
      bidderAccessStatus: "Demo Approved",
      conditionReportStatus: "Not Requested",
      bidderLabel: "Bidder 071",
      bidCount: 11,
      absenteeBidCount: 5,
      watchCount: 96,
      closeOffsetSeconds: 199,
    },
    {
      artifactId: "sun-qiye-nine-dragon-crown",
      lotNo: "LOT 04",
      estimateLow: 28000,
      estimateHigh: 42000,
      openingBid: 22000,
      currentPrice: 28000,
      reserveStatus: "Reserve Not Met",
      lotState: "Next",
      bidderAccessStatus: "Pending Demo Review",
      conditionReportStatus: "Specialist Review Required",
      bidderLabel: "Bidder 026",
      bidCount: 6,
      absenteeBidCount: 2,
      watchCount: 45,
      closeOffsetSeconds: 420,
    },
    {
      artifactId: "zhi-min-hetu-luoshu",
      lotNo: "LOT 05",
      estimateLow: 46000,
      estimateHigh: 68000,
      openingBid: 36000,
      currentPrice: 46000,
      reserveStatus: "Reserve Not Met",
      lotState: "Queued",
      bidderAccessStatus: "Specialist Review Required",
      conditionReportStatus: "Requested",
      bidderLabel: "Bidder 203",
      bidCount: 9,
      absenteeBidCount: 5,
      watchCount: 63,
      closeOffsetSeconds: 600,
    },
    {
      artifactId: "feng-mantian-ruanxian",
      lotNo: "LOT 06",
      estimateLow: 18000,
      estimateHigh: 26000,
      openingBid: 14000,
      currentPrice: 18000,
      reserveStatus: "Reserve Met",
      lotState: "Queued",
      bidderAccessStatus: "Demo Approved",
      conditionReportStatus: "Ready for Preview",
      bidderLabel: "Bidder 009",
      bidCount: 7,
      absenteeBidCount: 3,
      watchCount: 31,
      closeOffsetSeconds: 780,
    },
    {
      artifactId: "wu-guanzhen-na-shui",
      lotNo: "LOT 07",
      estimateLow: 22000,
      estimateHigh: 30000,
      openingBid: 17000,
      currentPrice: 22000,
      reserveStatus: "Reserve Not Met",
      lotState: "Queued",
      bidderAccessStatus: "Not Requested",
      conditionReportStatus: "Ready for Preview",
      bidderLabel: "Bidder 181",
      bidCount: 5,
      absenteeBidCount: 2,
      watchCount: 44,
      closeOffsetSeconds: 960,
    },
    {
      artifactId: "su-xianzhong-paper",
      lotNo: "LOT 08",
      estimateLow: 10000,
      estimateHigh: 15000,
      openingBid: 7500,
      currentPrice: 10000,
      reserveStatus: "Reserve Met",
      lotState: "Queued",
      bidderAccessStatus: "Demo Approved",
      conditionReportStatus: "Ready for Preview",
      bidderLabel: "Bidder 066",
      bidCount: 6,
      absenteeBidCount: 1,
      watchCount: 29,
      closeOffsetSeconds: 1140,
    },
    {
      artifactId: "diao-juan-crimson",
      lotNo: "LOT 09",
      estimateLow: 14000,
      estimateHigh: 21000,
      openingBid: 11000,
      currentPrice: 14000,
      reserveStatus: "Reserve Met",
      lotState: "Queued",
      bidderAccessStatus: "Pending Demo Review",
      conditionReportStatus: "Requested",
      bidderLabel: "Bidder 144",
      bidCount: 5,
      absenteeBidCount: 2,
      watchCount: 36,
      closeOffsetSeconds: 1320,
    },
    {
      artifactId: "li-xiaofeng-porcelain-clothing",
      lotNo: "LOT 10",
      estimateLow: 30000,
      estimateHigh: 45000,
      openingBid: 24000,
      currentPrice: 30000,
      reserveStatus: "Reserve Not Met",
      lotState: "Queued",
      bidderAccessStatus: "Specialist Review Required",
      conditionReportStatus: "Specialist Review Required",
      bidderLabel: "Bidder 220",
      bidCount: 8,
      absenteeBidCount: 4,
      watchCount: 58,
      closeOffsetSeconds: 1500,
    },
    {
      artifactId: "kathrin-rechenberg-geometry",
      lotNo: "LOT 11",
      estimateLow: 16000,
      estimateHigh: 24000,
      openingBid: 12000,
      currentPrice: 16000,
      reserveStatus: "Reserve Met",
      lotState: "Queued",
      bidderAccessStatus: "Not Requested",
      conditionReportStatus: "Ready for Preview",
      bidderLabel: "Bidder 092",
      bidCount: 4,
      absenteeBidCount: 1,
      watchCount: 41,
      closeOffsetSeconds: 1680,
    },
    {
      artifactId: "uma-wang-virgin-mary",
      lotNo: "LOT 12",
      estimateLow: 26000,
      estimateHigh: 38000,
      openingBid: 20000,
      currentPrice: 26000,
      reserveStatus: "Reserve Met",
      lotState: "Queued",
      bidderAccessStatus: "Not Requested",
      conditionReportStatus: "Not Requested",
      bidderLabel: "Bidder 305",
      bidCount: 3,
      absenteeBidCount: 1,
      watchCount: 52,
      closeOffsetSeconds: 1860,
    },
  ];

  const auctionMechanisms = [
    {
      title: "Quick Bid",
      titleZh: "快速下一口价",
      body: "Bid at the next minimum increment after a review step.",
      bodyZh: "按下一口最低有效价出价，并先进入确认层。",
    },
    {
      title: "Max Bid / Proxy Bid",
      titleZh: "代理最高价",
      body: "The confidential maximum is not exposed; the system advances only by required increments.",
      bodyZh: "最高价保密，系统只按必要加价幅度代为推进。",
    },
    {
      title: "Reserve Price",
      titleZh: "保留价",
      body: "The reserve amount stays confidential and only the reserve status is shown.",
      bodyZh: "保留价金额保密，仅展示是否达到。",
    },
    {
      title: "Soft Close",
      titleZh: "软关闭",
      body: "Bids in the final window extend the lot to prevent sniping.",
      bodyZh: "最后窗口内出价自动延长 LOT，防止抢秒。",
    },
    {
      title: "Bidder Approval",
      titleZh: "竞买资格",
      body: "High-value lots require approved bidder status before real participation.",
      bodyZh: "高价值拍品需完成竞买资格审核。",
    },
    {
      title: "Condition Report",
      titleZh: "状况报告",
      body: "Condition report and provenance sit next to the bid action.",
      bodyZh: "状况报告和来源信息必须靠近竞价决策。",
    },
  ];

  const auctionPolicies = {
    biddingFormat: "Timed online auction with live-style commentary",
    biddingFormatZh: "限时线上拍卖 + 直播式讲解",
    registrationDeadline: "15 Sep 2026 · 20:00 GMT",
    scheduledAt: "16 Sep 2026 · 20:00 GMT",
    bidderApproval: "Account profile, identity review and bidder approval required for real sale participation.",
    bidderApprovalZh: "真实拍卖需完成账户资料、身份审核和竞买资格审批。",
    reservePolicy: "Reserve amount is confidential; the interface only shows whether reserve has been met.",
    reservePolicyZh: "保留价金额保密，界面仅展示是否达到保留价。",
    softClosePolicy: `Bids placed in the final ${softCloseThresholdMinutes} minutes extend that lot by ${softCloseExtensionMinutes} minutes.`,
    softClosePolicyZh: `最后 ${softCloseThresholdMinutes} 分钟内出价，该 LOT 自动延长 ${softCloseExtensionMinutes} 分钟。`,
    tiePolicy: "Earlier confirmed maximum bids take priority when bid amounts are equal.",
    tiePolicyZh: "同金额最高价以较早确认者优先。",
    paymentPolicy: "Hammer price plus demo buyer premium and demo online service estimate; taxes, shipping, import duty and insurance excluded.",
    paymentPolicyZh: "预估总价包含落槌价、演示买方佣金和演示线上服务费；税费、物流、进口关税和保险另计。",
    simulatedNotice: "v0.5 is a front-end simulation only. No real bid, deposit, payment, order or settlement is created.",
    simulatedNoticeZh: "DEMO · 不构成真实出价或合同 · 不收取保证金 · 不处理支付 · 不办理结算或物流。",
  };

  function getBidIncrement(value) {
    const current = Number(value) || 0;
    const bracket = bidIncrementTable.find((item) => current >= item.min && current < item.max);
    return bracket ? bracket.increment : 10000;
  }

  function money(value) {
    return `£${Number(value).toLocaleString("en-GB")}`;
  }

  function estimateLabel(lot) {
    return `${money(lot.estimateLow)}–${money(lot.estimateHigh)}`;
  }

  function totalCost(value, lot) {
    const hammer = Number(value) || 0;
    const premium = hammer * (lot.buyerPremiumRate || buyerPremiumRate);
    const online = hammer * (lot.onlineServiceRate || onlineServiceRate);
    return Math.round(hammer + premium + online);
  }

  function makeHistory(lot) {
    const increment = getBidIncrement(lot.currentPrice);
    const base = Number(lot.currentPrice) || 0;
    if (lot.lotState === "Live Now") {
      return [
        { bidType: "competing", bidderLabel: "COMPETING", amount: base, note: "对手出价", relativeTime: "2 分钟前", simulatedOnly: true },
        { bidType: "quick", bidderLabel: "YOU", amount: base - increment, note: "快速出价", relativeTime: "2 分钟前", simulatedOnly: true },
        { bidType: "competing", bidderLabel: "COMPETING", amount: base - increment * 2, note: "对手出价", relativeTime: "2 分钟前", simulatedOnly: true },
        { bidType: "quick", bidderLabel: "YOU", amount: base - increment * 3, note: "快速出价", relativeTime: "2 分钟前", simulatedOnly: true },
        { bidType: "quick", bidderLabel: "YOU", amount: base - increment * 4, note: "快速出价", relativeTime: "2 分钟前", simulatedOnly: true },
        { bidType: "soft-close", bidderLabel: "SYSTEM", amount: null, note: "Soft close - lot extended 3 min", relativeTime: "2 分钟前", simulatedOnly: true },
      ];
    }
    return [
      { bidType: "absentee", bidderLabel: lot.bidderLabel, amount: base, note: "Absentee max accepted", relativeTime: "预登记", simulatedOnly: true },
      { bidType: "opening", bidderLabel: "SYSTEM", amount: lot.openingBid, note: "Opening ask", relativeTime: "预登记", simulatedOnly: true },
    ];
  }

  lotData.forEach((lot) => {
    lot.bidIncrement = getBidIncrement(lot.currentPrice);
    lot.nextBid = lot.currentPrice + lot.bidIncrement;
    lot.buyerPremiumRate = buyerPremiumRate;
    lot.onlineServiceRate = onlineServiceRate;
    lot.softCloseThresholdMinutes = softCloseThresholdMinutes;
    lot.softCloseExtensionMinutes = softCloseExtensionMinutes;
    lot.estimate = estimateLabel(lot);
    lot.currentPriceDisplay = money(lot.currentPrice);
    lot.nextBidDisplay = money(lot.nextBid);
    lot.bidIncrementDisplay = money(lot.bidIncrement);
    lot.openingBidDisplay = money(lot.openingBid);
    lot.totalCostDisplay = `${money(totalCost(lot.nextBid, lot))} est.`;
    lot.countdownLabel = lot.lotState === "Live Now" ? "03:19" : "Queued";
    lot.conditionReportAvailable = lot.conditionReportStatus !== "Not Requested";
    lot.simulatedOnly = true;
    lot.bidHistory = makeHistory(lot);
  });

  window.XEMTA_AUCTION_EVENTS = [
    {
      id: eventId,
      title: "London 2026 Selected Works",
      titleZh: "London 2026 精选拍品",
      subtitle: "Selected Heritage Works · Professional Simulated Auction",
      status: "live-demo",
      scheduledAt: auctionPolicies.scheduledAt,
      registrationDeadline: auctionPolicies.registrationDeadline,
      currency,
      countdownLabel: "03:19",
      lotCount: lotData.length,
      currentLotNo: "LOT 03",
      featuredLotId: "huang-wei-ceremonial-robe",
      onlineViewers: 1284,
      registeredBidders: 96,
      softCloseThresholdMinutes,
      softCloseExtensionMinutes,
      buyerPremiumRate,
      onlineServiceRate,
      lots: lotData.map((lot) => lot.artifactId),
      lotData,
      bidIncrementTable,
    },
  ];

  window.XEMTA_AUCTION_STATE = {
    eventId,
    simulatedOnly: true,
    notice: auctionPolicies.simulatedNotice,
    noticeZh: auctionPolicies.simulatedNoticeZh,
  };

  window.XEMTA_AUCTION_POLICIES = auctionPolicies;
  window.XEMTA_AUCTION_MECHANISMS = auctionMechanisms;
  window.XEMTA_GET_BID_INCREMENT = getBidIncrement;
  window.XEMTA_FORMAT_MONEY = money;

  if (Array.isArray(window.ARTIFACTS)) {
    const byId = new Map(window.ARTIFACTS.map((item) => [item.id, item]));
    lotData.forEach((lot) => {
      const item = byId.get(lot.artifactId);
      if (!item) return;
      Object.assign(item, {
        auctionLot: true,
        auctionPreview: true,
        auctionEventId: eventId,
        auctionSessionTitle: "London 2026 Selected Works",
        lotNo: lot.lotNo,
        lotNumber: lot.lotNo,
        lotState: lot.lotState,
        auctionStatus: lot.lotState,
        estimateLow: lot.estimateLow,
        estimateHigh: lot.estimateHigh,
        estimate: lot.estimate,
        openingBid: lot.openingBid,
        currentPrice: lot.currentPrice,
        nextBid: lot.nextBid,
        bidIncrement: lot.bidIncrement,
        bidCount: lot.bidCount,
        absenteeBidCount: lot.absenteeBidCount,
        watchCount: lot.watchCount,
        reserveStatus: lot.reserveStatus,
        bidderAccessStatus: lot.bidderAccessStatus,
        conditionReportStatus: lot.conditionReportStatus,
        buyerPremiumRate: lot.buyerPremiumRate,
        onlineServiceRate: lot.onlineServiceRate,
        currentPriceDisplay: lot.currentPriceDisplay,
        nextBidDisplay: lot.nextBidDisplay,
        bidIncrementDisplay: lot.bidIncrementDisplay,
        openingBidDisplay: lot.openingBidDisplay,
        totalCostDisplay: lot.totalCostDisplay,
        countdownLabel: lot.countdownLabel,
        simulatedBidEnabled: true,
        conditionReportAvailable: lot.conditionReportAvailable,
        bidderAccessRequired: true,
        viewIn3dAvailable: true,
        softCloseEnabled: true,
        softClosePolicy: auctionPolicies.softClosePolicy,
        auctionFeePolicy: auctionPolicies.paymentPolicy,
        simulatedOnly: true,
      });
    });
  }
})();
