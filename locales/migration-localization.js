const locales = {
  en: { label: '🇬🇧 EN', language: 'en', direction: 'ltr', reference: 'Translations are provided for convenience. In case of discrepancy, the English version is the reference.' },
  fr: { label: '🇫🇷 FR', language: 'fr', direction: 'ltr', reference: 'Les traductions sont fournies à titre indicatif. En cas de divergence, la version anglaise fait référence.' },
  es: { label: '🇪🇸 ES', language: 'es', direction: 'ltr', reference: 'Las traducciones se facilitan por comodidad. En caso de discrepancia, prevalece la versión en inglés.' },
  pt: { label: '🇧🇷 PT', language: 'pt', direction: 'ltr', reference: 'As traduções são fornecidas para conveniência. Em caso de divergência, a versão em inglês prevalece.' },
  de: { label: '🇩🇪 DE', language: 'de', direction: 'ltr', reference: 'Übersetzungen dienen der Vereinfachung. Bei Abweichungen ist die englische Fassung maßgeblich.' },
  zh: { label: '🇨🇳 中文', language: 'zh-CN', direction: 'ltr', reference: '译文仅供参考。如有不一致，以英文版本为准。' },
  ja: { label: '🇯🇵 日本語', language: 'ja', direction: 'ltr', reference: '翻訳は便宜のために提供されています。相違がある場合は、英語版が基準となります。' },
  ar: { label: '🇸🇦 العربية', language: 'ar', direction: 'rtl', reference: 'الترجمات مقدمة للتيسير. عند وجود أي اختلاف، تكون النسخة الإنجليزية هي المرجع.' },
}

const French = {
  'Connect Wallet': 'Connecter le portefeuille',
  'Live Migration': 'Migration en direct',
  'Migration Old Xitcoin': 'Migration de l’ancien Xitcoin',
  'Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.': 'Migrez simplement vos anciens jetons Old Xitcoin (XTC) vers le contrat intelligent Xitcoin (XTC) mis à niveau.',
  'One-Way': 'Sens unique',
  'You send': 'Vous envoyez',
  'You receive': 'Vous recevez',
  'Balance:': 'Solde :',
  'This migration is': 'Cette migration est',
  'irreversible': 'irréversible',
  '. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.': '. Les anciens XTC sont envoyés à l’adresse désignée. Vous recevez les XTC après confirmation de la transaction sur la chaîne.',
  'Migrate Old XTC → XTC': 'Migrer les anciens XTC → XTC',
  'Total legacy XTC sent': 'Total des anciens XTC envoyés',
  'Legacy XTC sent to the designated dead address': 'Anciens XTC envoyés à l’adresse désignée',
  'Migration Progress': 'Progression de la migration',
  'of 21,000,000,000 XTC total supply': 'sur une offre totale de 21 000 000 000 XTC',
  'Migrate Your Old Xitcoin for Xitcoin': 'Migrer vos anciens Xitcoin vers Xitcoin',
  'The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a': 'La migration Xitcoin (XTC) assure une transition simple du contrat historique Old Xitcoin (XTC) vers le nouveau contrat intelligent Xitcoin mis à niveau, fondé sur une',
  'secure proxy architecture.': 'architecture proxy sécurisée.',
  'The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract': 'Le nouveau contrat fondé sur un proxy permet des mises à jour futures adaptées à l’évolution de la blockchain, sans compromettre les avoirs. Le contrat proxy',
  'does not permit any increase in token supply': 'ne permet aucune augmentation de l’offre de jetons',
  '— it solely enables protocol improvements and compatibility updates over time.': '— il permet uniquement des améliorations du protocole et des mises à jour de compatibilité.',
  'The migration uses a': 'La migration applique un',
  '1:1 ratio': 'ratio de 1:1',
  '— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are': '— pour chaque ancien XTC migré, exactement 1 nouveau XTC est reçu. Les anciens XTC sont',
  'sent': 'envoyés',
  'to the designated': 'vers l’adresse désignée',
  'dead address': 'dite « dead address »',
  '. New XTC tokens are received only after the transaction is confirmed on-chain.': '. Les nouveaux XTC sont reçus après confirmation de la transaction sur la chaîne.',
  'All migration transactions can be verified on the': 'Toutes les transactions de migration peuvent être vérifiées sur',
  'Cronos Explorer': 'l’explorateur Cronos',
  'Secure & Audited': 'Sécurisé et audité',
  'Xitcoin has been audited by': 'Xitcoin a été audité par',
  'ensuring the integrity and security of the smart contract.': 'afin d’assurer l’intégrité et la sécurité du contrat intelligent.',
  'Fixed Supply': 'Offre fixe',
  'The Xitcoin contract is established at a maximum of': 'Le contrat Xitcoin fixe un maximum de',
  '. No additional supply can ever be created.': '. Aucune offre supplémentaire ne peut être créée.',
  'Fully Transparent': 'Entièrement transparent',
  'Every migration is recorded on-chain. Verify all transactions on the': 'Chaque migration est enregistrée sur la chaîne. Vérifiez toutes les transactions sur',
  'View Cyberscope Audit': 'Voir l’audit Cyberscope',
}

const Spanish = {
  'Connect Wallet': 'Conectar cartera',
  'Live Migration': 'Migración activa',
  'Migration Old Xitcoin': 'Migración de Old Xitcoin',
  'Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.': 'Migra fácilmente tus tokens heredados Old Xitcoin (XTC) al contrato inteligente Xitcoin (XTC) actualizado.',
  'One-Way': 'Un solo sentido', 'You send': 'Envías', 'You receive': 'Recibes', 'Balance:': 'Saldo:',
  'This migration is': 'Esta migración es', 'irreversible': 'irreversible',
  '. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.': '. Los XTC antiguos se envían a la dirección designada. Recibes XTC tras la confirmación de la transacción en cadena.',
  'Migrate Old XTC → XTC': 'Migrar Old XTC → XTC', 'Total legacy XTC sent': 'Total de XTC antiguos enviados',
  'Legacy XTC sent to the designated dead address': 'XTC antiguos enviados a la dirección designada',
  'Migration Progress': 'Progreso de la migración', 'of 21,000,000,000 XTC total supply': 'de 21.000.000.000 XTC de suministro total',
  'Migrate Your Old Xitcoin for Xitcoin': 'Migra tu Old Xitcoin a Xitcoin',
  'Secure & Audited': 'Seguro y auditado', 'Fixed Supply': 'Suministro fijo', 'Fully Transparent': 'Totalmente transparente',
  'View Cyberscope Audit': 'Ver auditoría de Cyberscope',
}

const Portuguese = {
  'Connect Wallet': 'Conectar carteira', 'Live Migration': 'Migração ativa', 'Migration Old Xitcoin': 'Migração do Old Xitcoin',
  'Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.': 'Migre facilmente seus tokens antigos Old Xitcoin (XTC) para o contrato inteligente Xitcoin (XTC) atualizado.',
  'One-Way': 'Sentido único', 'You send': 'Você envia', 'You receive': 'Você recebe', 'Balance:': 'Saldo:',
  'This migration is': 'Esta migração é', 'irreversible': 'irreversível',
  '. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.': '. Os XTC antigos são enviados ao endereço designado. Você recebe XTC após a confirmação da transação na rede.',
  'Migrate Old XTC → XTC': 'Migrar Old XTC → XTC', 'Total legacy XTC sent': 'Total de XTC antigos enviados',
  'Legacy XTC sent to the designated dead address': 'XTC antigos enviados ao endereço designado',
  'Migration Progress': 'Progresso da migração', 'of 21,000,000,000 XTC total supply': 'de 21.000.000.000 XTC de oferta total',
  'Migrate Your Old Xitcoin for Xitcoin': 'Migre seu Old Xitcoin para Xitcoin',
  'Secure & Audited': 'Seguro e auditado', 'Fixed Supply': 'Oferta fixa', 'Fully Transparent': 'Totalmente transparente',
  'View Cyberscope Audit': 'Ver auditoria da Cyberscope',
}

const German = {
  'Connect Wallet': 'Wallet verbinden', 'Live Migration': 'Aktive Migration', 'Migration Old Xitcoin': 'Old-Xitcoin-Migration',
  'Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.': 'Übertragen Sie Ihre bisherigen Old-Xitcoin-Token (XTC) einfach auf den aktualisierten Xitcoin-(XTC)-Smart-Contract.',
  'One-Way': 'Einbahnstraße', 'You send': 'Sie senden', 'You receive': 'Sie erhalten', 'Balance:': 'Saldo:',
  'This migration is': 'Diese Migration ist', 'irreversible': 'unumkehrbar',
  '. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.': '. Alte XTC werden an die festgelegte Adresse gesendet. Sie erhalten XTC nach der Bestätigung der Transaktion on-chain.',
  'Migrate Old XTC → XTC': 'Old XTC → XTC migrieren', 'Total legacy XTC sent': 'Gesamt gesendete alte XTC',
  'Legacy XTC sent to the designated dead address': 'Alte XTC an die festgelegte Adresse gesendet',
  'Migration Progress': 'Migrationsfortschritt', 'of 21,000,000,000 XTC total supply': 'von 21.000.000.000 XTC Gesamtangebot',
  'Migrate Your Old Xitcoin for Xitcoin': 'Old Xitcoin zu Xitcoin migrieren',
  'Secure & Audited': 'Sicher und auditiert', 'Fixed Supply': 'Festes Angebot', 'Fully Transparent': 'Vollständig transparent',
  'View Cyberscope Audit': 'Cyberscope-Audit ansehen',
}

const Chinese = {
  'Connect Wallet': '连接钱包', 'Live Migration': '迁移进行中', 'Migration Old Xitcoin': '旧版 Xitcoin 迁移',
  'Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.': '将您的旧版 Old Xitcoin（XTC）代币迁移至升级后的 Xitcoin（XTC）智能合约。',
  'One-Way': '单向', 'You send': '您发送', 'You receive': '您收到', 'Balance:': '余额：',
  'This migration is': '此迁移', 'irreversible': '不可逆',
  '. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.': '。旧版 XTC 将发送至指定地址。交易在链上确认后，您将收到 XTC。',
  'Migrate Old XTC → XTC': '迁移 Old XTC → XTC', 'Total legacy XTC sent': '已发送旧版 XTC 总量',
  'Legacy XTC sent to the designated dead address': '已发送至指定地址的旧版 XTC',
  'Migration Progress': '迁移进度', 'of 21,000,000,000 XTC total supply': '占 21,000,000,000 XTC 总供应量',
  'Migrate Your Old Xitcoin for Xitcoin': '将您的 Old Xitcoin 迁移为 Xitcoin',
  'Secure & Audited': '安全且已审计', 'Fixed Supply': '固定供应量', 'Fully Transparent': '完全透明',
  'View Cyberscope Audit': '查看 Cyberscope 审计',
}

const Japanese = {
  'Connect Wallet': 'ウォレットを接続', 'Live Migration': '移行受付中', 'Migration Old Xitcoin': '旧 Xitcoin の移行',
  'Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.': '従来の Old Xitcoin（XTC）トークンを、更新された Xitcoin（XTC）スマートコントラクトへ移行します。',
  'One-Way': '一方向', 'You send': '送信するもの', 'You receive': '受け取るもの', 'Balance:': '残高：',
  'This migration is': 'この移行は', 'irreversible': '取り消せません',
  '. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.': '。旧 XTC は指定アドレスに送信されます。トランザクションがオンチェーンで確認された後、XTC を受け取ります。',
  'Migrate Old XTC → XTC': 'Old XTC → XTC を移行', 'Total legacy XTC sent': '送信済み旧 XTC 合計',
  'Legacy XTC sent to the designated dead address': '指定アドレスに送信済みの旧 XTC',
  'Migration Progress': '移行の進捗', 'of 21,000,000,000 XTC total supply': '総供給量 21,000,000,000 XTC 中',
  'Migrate Your Old Xitcoin for Xitcoin': 'Old Xitcoin を Xitcoin に移行',
  'Secure & Audited': '安全・監査済み', 'Fixed Supply': '固定供給量', 'Fully Transparent': '完全な透明性',
  'View Cyberscope Audit': 'Cyberscope 監査を表示',
}

const Arabic = {
  'Connect Wallet': 'ربط المحفظة', 'Live Migration': 'الهجرة متاحة', 'Migration Old Xitcoin': 'هجرة Xitcoin القديم',
  'Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.': 'انقل رموز Old Xitcoin (XTC) القديمة إلى عقد Xitcoin (XTC) الذكي المحدّث.',
  'One-Way': 'باتجاه واحد', 'You send': 'ترسل', 'You receive': 'تستلم', 'Balance:': 'الرصيد:',
  'This migration is': 'هذه الهجرة', 'irreversible': 'غير قابلة للعكس',
  '. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.': '. يتم إرسال XTC القديم إلى العنوان المحدد. تستلم XTC بعد تأكيد المعاملة على السلسلة.',
  'Migrate Old XTC → XTC': 'نقل Old XTC → XTC', 'Total legacy XTC sent': 'إجمالي XTC القديم المرسل',
  'Legacy XTC sent to the designated dead address': 'XTC القديم المرسل إلى العنوان المحدد',
  'Migration Progress': 'تقدم الهجرة', 'of 21,000,000,000 XTC total supply': 'من إجمالي عرض 21,000,000,000 XTC',
  'Migrate Your Old Xitcoin for Xitcoin': 'انقل Old Xitcoin إلى Xitcoin',
  'Secure & Audited': 'آمن ومدقق', 'Fixed Supply': 'عرض ثابت', 'Fully Transparent': 'شفافية كاملة',
  'View Cyberscope Audit': 'عرض تدقيق Cyberscope',
}

const translations = { fr: French, es: Spanish, pt: Portuguese, de: German, zh: Chinese, ja: Japanese, ar: Arabic }

const completePageCopy = {
  fr: {
    'Home': 'Accueil', 'Old Xitcoin Whitepaper': 'Livre blanc Old Xitcoin', 'Xitcoin Whitepaper': 'Livre blanc Xitcoin', 'Migration': 'Migration', 'MAX': 'MAX',
    'Old Xitcoin': 'Ancien Xitcoin', 'Xitcoin': 'Xitcoin', 'Approving...': 'Autorisation…', 'Migrating...': 'Migration…', 'Approve Old XTC And Migrate': 'Autoriser les anciens XTC et migrer',
  },
  es: {
    'Home': 'Inicio', 'Old Xitcoin Whitepaper': 'Libro blanco de Old Xitcoin', 'Xitcoin Whitepaper': 'Libro blanco de Xitcoin', 'Migration': 'Migración', 'MAX': 'MÁX.',
    'Old Xitcoin': 'Old Xitcoin', 'Xitcoin': 'Xitcoin', 'Approving...': 'Autorizando…', 'Migrating...': 'Migrando…', 'Approve Old XTC And Migrate': 'Autorizar Old XTC y migrar',
    'The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a': 'La migración de Xitcoin (XTC) permite una transición fluida desde el contrato heredado Old Xitcoin (XTC) al nuevo contrato inteligente Xitcoin actualizado, basado en una',
    'secure proxy architecture.': 'arquitectura proxy segura.',
    'The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract': 'El nuevo contrato basado en proxy permite futuras actualizaciones acordes con la evolución de la cadena de bloques, sin comprometer los activos. Es importante que el contrato proxy',
    'does not permit any increase in token supply': 'no permite ningún aumento del suministro de tokens',
    '— it solely enables protocol improvements and compatibility updates over time.': '— solo permite mejoras del protocolo y actualizaciones de compatibilidad con el tiempo.',
    'The migration uses a': 'La migración utiliza una', '1:1 ratio': 'proporción 1:1',
    '— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are': '— por cada Old XTC migrado, se recibe exactamente 1 XTC nuevo. Los Old XTC se',
    'sent': 'envían', 'to the designated': 'a la', 'dead address': 'dirección designada',
    '. New XTC tokens are received only after the transaction is confirmed on-chain.': '. Los nuevos XTC se reciben únicamente tras la confirmación de la transacción en cadena.',
    'All migration transactions can be verified on the': 'Todas las transacciones de migración se pueden verificar en el', 'Cronos Explorer': 'explorador Cronos',
    'Xitcoin has been audited by': 'Xitcoin ha sido auditado por', 'ensuring the integrity and security of the smart contract.': 'lo que garantiza la integridad y la seguridad del contrato inteligente.',
    'The Xitcoin contract is established at a maximum of': 'El contrato Xitcoin se establece con un máximo de', '. No additional supply can ever be created.': '. No se puede crear suministro adicional.',
    'Every migration is recorded on-chain. Verify all transactions on the': 'Cada migración queda registrada en cadena. Verifica todas las transacciones en el',
  },
  pt: {
    'Home': 'Início', 'Old Xitcoin Whitepaper': 'Whitepaper do Old Xitcoin', 'Xitcoin Whitepaper': 'Whitepaper do Xitcoin', 'Migration': 'Migração', 'MAX': 'MÁX.',
    'Old Xitcoin': 'Old Xitcoin', 'Xitcoin': 'Xitcoin', 'Approving...': 'Autorizando…', 'Migrating...': 'Migrando…', 'Approve Old XTC And Migrate': 'Autorizar Old XTC e migrar',
    'The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a': 'A migração Xitcoin (XTC) permite uma transição simples do contrato antigo Old Xitcoin (XTC) para o novo contrato inteligente Xitcoin atualizado, construído sobre uma',
    'secure proxy architecture.': 'arquitetura proxy segura.',
    'The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract': 'O novo contrato baseado em proxy permite atualizações futuras alinhadas à evolução da blockchain, sem comprometer os ativos. É importante observar que o contrato proxy',
    'does not permit any increase in token supply': 'não permite nenhum aumento na oferta de tokens',
    '— it solely enables protocol improvements and compatibility updates over time.': '— ele apenas permite melhorias de protocolo e atualizações de compatibilidade ao longo do tempo.',
    'The migration uses a': 'A migração usa uma', '1:1 ratio': 'proporção de 1:1',
    '— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are': '— para cada Old XTC migrado, exatamente 1 novo XTC é recebido. Os Old XTC são',
    'sent': 'enviados', 'to the designated': 'para o', 'dead address': 'endereço designado',
    '. New XTC tokens are received only after the transaction is confirmed on-chain.': '. Os novos XTC são recebidos somente após a confirmação da transação na blockchain.',
    'All migration transactions can be verified on the': 'Todas as transações de migração podem ser verificadas no', 'Cronos Explorer': 'explorador Cronos',
    'Xitcoin has been audited by': 'Xitcoin foi auditado pela', 'ensuring the integrity and security of the smart contract.': 'garantindo a integridade e a segurança do contrato inteligente.',
    'The Xitcoin contract is established at a maximum of': 'O contrato Xitcoin estabelece um máximo de', '. No additional supply can ever be created.': '. Nenhuma oferta adicional poderá ser criada.',
    'Every migration is recorded on-chain. Verify all transactions on the': 'Cada migração é registrada na blockchain. Verifique todas as transações no',
  },
  de: {
    'Home': 'Startseite', 'Old Xitcoin Whitepaper': 'Old-Xitcoin-Whitepaper', 'Xitcoin Whitepaper': 'Xitcoin-Whitepaper', 'Migration': 'Migration', 'MAX': 'MAX.',
    'Old Xitcoin': 'Old Xitcoin', 'Xitcoin': 'Xitcoin', 'Approving...': 'Freigabe…', 'Migrating...': 'Migration…', 'Approve Old XTC And Migrate': 'Old XTC freigeben und migrieren',
    'The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a': 'Die Xitcoin-(XTC)-Migration ermöglicht einen nahtlosen Übergang vom bisherigen Old-Xitcoin-(XTC)-Contract zum neuen, aktualisierten Xitcoin-Smart-Contract auf einer',
    'secure proxy architecture.': 'sicheren Proxy-Architektur.',
    'The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract': 'Der neue Proxy-basierte Contract ermöglicht künftige Aktualisierungen im Einklang mit der Blockchain-Entwicklung, ohne Bestände zu beeinträchtigen. Wichtig ist: Der Proxy-Contract',
    'does not permit any increase in token supply': 'erlaubt keine Erhöhung des Token-Angebots',
    '— it solely enables protocol improvements and compatibility updates over time.': '— er ermöglicht ausschließlich Protokollverbesserungen und Kompatibilitätsupdates.',
    'The migration uses a': 'Die Migration verwendet ein', '1:1 ratio': '1:1-Verhältnis',
    '— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are': '— für jeden migrierten Old XTC wird genau 1 neuer XTC empfangen. Old XTC werden',
    'sent': 'gesendet', 'to the designated': 'an die', 'dead address': 'festgelegte Adresse',
    '. New XTC tokens are received only after the transaction is confirmed on-chain.': '. Neue XTC werden erst nach der On-Chain-Bestätigung der Transaktion empfangen.',
    'All migration transactions can be verified on the': 'Alle Migrationstransaktionen können im', 'Cronos Explorer': 'Cronos Explorer',
    'Xitcoin has been audited by': 'Xitcoin wurde von', 'ensuring the integrity and security of the smart contract.': 'auditiert; dies gewährleistet Integrität und Sicherheit des Smart Contracts.',
    'The Xitcoin contract is established at a maximum of': 'Der Xitcoin-Contract ist auf höchstens', '. No additional supply can ever be created.': 'festgelegt. Ein zusätzliches Angebot kann nicht erstellt werden.',
    'Every migration is recorded on-chain. Verify all transactions on the': 'Jede Migration wird on-chain aufgezeichnet. Prüfen Sie alle Transaktionen im',
  },
  zh: {
    'Home': '首页', 'Old Xitcoin Whitepaper': '旧版 Xitcoin 白皮书', 'Xitcoin Whitepaper': 'Xitcoin 白皮书', 'Migration': '迁移', 'MAX': '最大',
    'Old Xitcoin': '旧版 Xitcoin', 'Xitcoin': 'Xitcoin', 'Approving...': '正在授权…', 'Migrating...': '正在迁移…', 'Approve Old XTC And Migrate': '授权 Old XTC 并迁移',
    'The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a': 'Xitcoin（XTC）迁移实现从旧版 Old Xitcoin（XTC）合约到升级后的 Xitcoin 智能合约的平稳过渡，该合约采用',
    'secure proxy architecture.': '安全的代理架构。',
    'The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract': '新的代理合约支持与区块链演进相适应的未来升级，并且不会损害代币持有量。重要的是，该代理合约',
    'does not permit any increase in token supply': '不允许增加代币供应量', '— it solely enables protocol improvements and compatibility updates over time.': '— 它仅支持协议改进和兼容性更新。',
    'The migration uses a': '本迁移采用', '1:1 ratio': '1:1 比例',
    '— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are': '— 每迁移 1 个 Old XTC，恰好收到 1 个新的 XTC。Old XTC 将被',
    'sent': '发送', 'to the designated': '至指定', 'dead address': '地址',
    '. New XTC tokens are received only after the transaction is confirmed on-chain.': '。交易在链上确认后，才会收到新的 XTC。',
    'All migration transactions can be verified on the': '所有迁移交易均可在', 'Cronos Explorer': 'Cronos 浏览器',
    'Xitcoin has been audited by': 'Xitcoin 已由', 'ensuring the integrity and security of the smart contract.': '审计，以确保智能合约的完整性与安全性。',
    'The Xitcoin contract is established at a maximum of': 'Xitcoin 合约的最高供应量为', '. No additional supply can ever be created.': '。不得创建额外供应量。',
    'Every migration is recorded on-chain. Verify all transactions on the': '每次迁移都会记录在链上。请在',
  },
  ja: {
    'Home': 'ホーム', 'Old Xitcoin Whitepaper': 'Old Xitcoin ホワイトペーパー', 'Xitcoin Whitepaper': 'Xitcoin ホワイトペーパー', 'Migration': '移行', 'MAX': '最大',
    'Old Xitcoin': 'Old Xitcoin', 'Xitcoin': 'Xitcoin', 'Approving...': '承認中…', 'Migrating...': '移行中…', 'Approve Old XTC And Migrate': 'Old XTC を承認して移行',
    'The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a': 'Xitcoin（XTC）の移行により、従来の Old Xitcoin（XTC）コントラクトから、次の基盤を採用した更新済み Xitcoin スマートコントラクトへ円滑に移行できます。',
    'secure proxy architecture.': '安全なプロキシアーキテクチャ。',
    'The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract': '新しいプロキシ型コントラクトは、保有資産を損なうことなく、ブロックチェーンの進化に沿った将来の更新を可能にします。重要な点として、このプロキシ型コントラクトは',
    'does not permit any increase in token supply': 'トークン供給量の増加を許可しません', '— it solely enables protocol improvements and compatibility updates over time.': '— プロトコルの改善と互換性の更新のみを可能にします。',
    'The migration uses a': 'この移行は', '1:1 ratio': '1:1 の比率',
    '— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are': '— Old XTC を 1 枚移行するごとに、新しい XTC を正確に 1 枚受け取ります。Old XTC は',
    'sent': '送信され', 'to the designated': '指定', 'dead address': 'アドレスへ',
    '. New XTC tokens are received only after the transaction is confirmed on-chain.': '。新しい XTC はトランザクションがオンチェーンで確認された後に受け取ります。',
    'All migration transactions can be verified on the': 'すべての移行トランザクションは', 'Cronos Explorer': 'Cronos Explorer',
    'Xitcoin has been audited by': 'Xitcoin は', 'ensuring the integrity and security of the smart contract.': 'による監査を受け、スマートコントラクトの完全性と安全性を確保しています。',
    'The Xitcoin contract is established at a maximum of': 'Xitcoin コントラクトの最大供給量は', '. No additional supply can ever be created.': 'です。追加供給は作成できません。',
    'Every migration is recorded on-chain. Verify all transactions on the': 'すべての移行はオンチェーンで記録されます。取引は',
  },
  ar: {
    'Home': 'الرئيسية', 'Old Xitcoin Whitepaper': 'الورقة البيضاء لـ Old Xitcoin', 'Xitcoin Whitepaper': 'الورقة البيضاء لـ Xitcoin', 'Migration': 'الهجرة', 'MAX': 'الحد الأقصى',
    'Old Xitcoin': 'Old Xitcoin', 'Xitcoin': 'Xitcoin', 'Approving...': 'جارٍ التفويض…', 'Migrating...': 'جارٍ النقل…', 'Approve Old XTC And Migrate': 'فوّض Old XTC وانقل',
    'The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a': 'تضمن هجرة Xitcoin (XTC) انتقالاً سلساً من عقد Old Xitcoin (XTC) القديم إلى عقد Xitcoin الذكي المطور والقائم على',
    'secure proxy architecture.': 'بنية وكيل آمنة.',
    'The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract': 'يتيح العقد الجديد القائم على وكيل تحديثات مستقبلية تتماشى مع تطور البلوكتشين دون المساس بحيازات الرموز. والأهم أن عقد الوكيل',
    'does not permit any increase in token supply': 'لا يسمح بأي زيادة في عرض الرموز', '— it solely enables protocol improvements and compatibility updates over time.': '— بل يتيح فقط تحسينات البروتوكول وتحديثات التوافق بمرور الوقت.',
    'The migration uses a': 'تستخدم الهجرة', '1:1 ratio': 'نسبة 1:1',
    '— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are': '— مقابل كل Old XTC يتم نقله، يتم استلام XTC جديد واحد بالضبط. يتم',
    'sent': 'إرسال Old XTC', 'to the designated': 'إلى', 'dead address': 'العنوان المحدد',
    '. New XTC tokens are received only after the transaction is confirmed on-chain.': '. لا يتم استلام XTC الجديد إلا بعد تأكيد المعاملة على السلسلة.',
    'All migration transactions can be verified on the': 'يمكن التحقق من جميع معاملات الهجرة على', 'Cronos Explorer': 'مستكشف Cronos',
    'Xitcoin has been audited by': 'تم تدقيق Xitcoin بواسطة', 'ensuring the integrity and security of the smart contract.': 'مما يضمن سلامة وأمان العقد الذكي.',
    'The Xitcoin contract is established at a maximum of': 'يحدد عقد Xitcoin حداً أقصى قدره', '. No additional supply can ever be created.': '. لا يمكن إنشاء أي عرض إضافي.',
    'Every migration is recorded on-chain. Verify all transactions on the': 'يتم تسجيل كل هجرة على السلسلة. تحقق من جميع المعاملات على',
  },
}

for (const [locale, messages] of Object.entries(completePageCopy)) Object.assign(translations[locale], messages)

const requiredMessages = [...new Set([...Object.keys(French), ...Object.keys(completePageCopy.fr)])]
const availableLocales = Object.fromEntries(
  Object.entries(locales).filter(([locale]) => locale === 'en' || requiredMessages.every((message) => Object.hasOwn(translations[locale], message))),
)

const baseText = new WeakMap()
let selected = 'en'

function localizedText(value) {
  const dictionary = translations[selected]
  if (!dictionary) return value
  const leading = value.match(/^\s*/)[0]
  const trailing = value.match(/\s*$/)[0]
  const core = value.slice(leading.length, value.length - trailing.length)
  return dictionary[core] ? `${leading}${dictionary[core]}${trailing}` : value
}

function applyLocale() {
  document.documentElement.lang = locales[selected].language
  document.documentElement.dir = locales[selected].direction
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)
  for (const node of nodes) {
    if (!baseText.has(node)) baseText.set(node, node.nodeValue)
    const next = localizedText(baseText.get(node))
    if (node.nodeValue !== next) node.nodeValue = next
  }
  const selector = document.getElementById('xitcoin-language')
  if (selector) selector.value = selected
  const notice = document.getElementById('xitcoin-language-notice')
  if (notice) notice.textContent = locales[selected].reference
}

function addSelector() {
  if (document.getElementById('xitcoin-language')) return
  const walletButton = [...document.querySelectorAll('button')].find((button) => {
    const text = button.textContent.trim()
    return text === 'Connect Wallet' || text === 'Connecter le portefeuille'
  })
  if (!walletButton?.parentElement) return

  const group = document.createElement('div')
  group.id = 'xitcoin-language-group'

  const selector = document.createElement('select')
  selector.id = 'xitcoin-language'
  selector.setAttribute('aria-label', 'Language / Langue')
  selector.innerHTML = Object.entries(availableLocales).map(([value, locale]) => `<option value="${value}">${locale.label}</option>`).join('')
  selector.style.cssText = 'height:46px;padding:0 8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#111217;color:#fff;font:700 12px system-ui;cursor:pointer;'
  selector.addEventListener('change', () => {
    selected = selector.value
    applyLocale()
  })
  const parent = walletButton.parentElement
  parent.replaceChild(group, walletButton)
  group.append(selector, walletButton)
}

function addLocaleNotice() {
  if (document.getElementById('xitcoin-language-notice')) return
  const notice = document.createElement('p')
  notice.id = 'xitcoin-language-notice'
  notice.style.cssText = 'max-width:1024px;margin:28px auto 8px;padding:0 20px;color:rgba(255,255,255,.45);font:500 12px/1.5 system-ui;text-align:center;'
  const footer = document.querySelector('footer')
  if (footer?.parentElement) footer.parentElement.insertBefore(notice, footer)
  else document.body.append(notice)
}

function addStyles() {
  if (document.getElementById('xitcoin-language-styles')) return
  const style = document.createElement('style')
  style.id = 'xitcoin-language-styles'
  style.textContent = '#xitcoin-language-group{display:flex;align-items:center;gap:8px;flex:0 0 auto;white-space:nowrap}#xitcoin-language{max-width:116px}@media(max-width:720px){#xitcoin-language-group{width:100%;justify-content:flex-end;gap:6px}#xitcoin-language{height:42px;max-width:100px}}'
  document.head.append(style)
}

function initialize() {
  addStyles()
  addSelector()
  addLocaleNotice()
  applyLocale()
}

window.addEventListener('load', () => {
  initialize()
})
