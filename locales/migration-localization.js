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

const GeneratedBatchOne = {
  "it": {
    "Connect Wallet": "Connetti il ​​portafoglio",
    "Live Migration": "Migrazione in tempo reale",
    "Migration Old Xitcoin": "Migrazione del vecchio Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Migra senza problemi i tuoi token Old Xitcoin (XTC) legacy al nuovo contratto intelligente Xitcoin (XTC) aggiornato.",
    "One-Way": "Senso Unico",
    "You send": "Tu invii",
    "You receive": "Ricevi",
    "Balance:": "Bilancia:",
    "This migration is": "Questa migrazione è",
    "irreversible": "irreversibile",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Il vecchio XTC viene inviato all'indirizzo morto designato. Ricevi XTC dopo che la transazione è stata confermata sulla catena.",
    "Migrate Old XTC → XTC": "Migrazione vecchio XTC → XTC",
    "Total legacy XTC sent": "XTC legacy totali inviati",
    "Legacy XTC sent to the designated dead address": "XTC legacy inviato all'indirizzo morto designato",
    "Migration Progress": "Progresso della migrazione",
    "of 21,000,000,000 XTC total supply": "di una fornitura totale di 21.000.000.000 di XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Migra il tuo vecchio Xitcoin per Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "La migrazione di Xitcoin (XTC) garantisce una transizione senza soluzione di continuità dal contratto legacy Old Xitcoin (XTC) al nuovo contratto intelligente Xitcoin aggiornato basato su un",
    "secure proxy architecture.": "architettura proxy sicura.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Il nuovo contratto basato su proxy consente futuri aggiornamenti in linea con l’evoluzione della blockchain, senza mai compromettere il possesso di token. È importante sottolineare che il contratto di delega",
    "does not permit any increase in token supply": "non consente alcun aumento dell'offerta di token",
    "— it solely enables protocol improvements and compatibility updates over time.": "— consente esclusivamente miglioramenti del protocollo e aggiornamenti di compatibilità nel tempo.",
    "The migration uses a": "La migrazione utilizza a",
    "1:1 ratio": "Rapporto 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— per ogni token Old XTC migrato, viene ricevuto esattamente 1 nuovo token XTC. I vecchi token XTC lo sono",
    "sent": "inviato",
    "to the designated": "al designato",
    "dead address": "indirizzo morto",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". I nuovi token XTC vengono ricevuti solo dopo la conferma della transazione sulla catena.",
    "All migration transactions can be verified on the": "Tutte le transazioni di migrazione possono essere verificate su",
    "Cronos Explorer": "Crono Esploratore",
    "Secure & Audited": "Sicuro e controllato",
    "Xitcoin has been audited by": "Xitcoin è stato controllato da",
    "ensuring the integrity and security of the smart contract.": "garantire l’integrità e la sicurezza del contratto intelligente.",
    "Fixed Supply": "Fornitura fissa",
    "The Xitcoin contract is established at a maximum of": "Il contratto Xitcoin è stabilito a un massimo di",
    ". No additional supply can ever be created.": ". Non sarà mai possibile creare alcuna fornitura aggiuntiva.",
    "Fully Transparent": "Completamente trasparente",
    "Every migration is recorded on-chain. Verify all transactions on the": "Ogni migrazione viene registrata on-chain. Verifica tutte le transazioni su",
    "View Cyberscope Audit": "Visualizza il controllo Cyberscope",
    "Home": "Casa",
    "Old Xitcoin Whitepaper": "Vecchio white paper su Xitcoin",
    "Xitcoin Whitepaper": "Libro bianco su Xitcoin",
    "Migration": "Migrazione",
    "MAX": "MASSIMO",
    "Old Xitcoin": "Vecchio Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Approvazione...",
    "Migrating...": "Migrazione...",
    "Approve Old XTC And Migrate": "Approva il vecchio XTC e migra"
  },
  "ko": {
    "Connect Wallet": "지갑 연결",
    "Live Migration": "실시간 마이그레이션",
    "Migration Old Xitcoin": "이전 Xitcoin 이전",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "기존 Old Xitcoin(XTC) 토큰을 새로운 업그레이드된 Xitcoin(XTC) 스마트 계약으로 원활하게 마이그레이션하세요.",
    "One-Way": "편도",
    "You send": "당신은 보낸다",
    "You receive": "당신은 받는다",
    "Balance:": "균형:",
    "This migration is": "이번 마이그레이션은",
    "irreversible": "뒤집을 수 없는",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". 이전 XTC는 지정된 데드 주소로 전송됩니다. 거래가 온체인으로 확인된 후 XTC를 받게 됩니다.",
    "Migrate Old XTC → XTC": "이전 XTC → XTC 마이그레이션",
    "Total legacy XTC sent": "전송된 총 레거시 XTC",
    "Legacy XTC sent to the designated dead address": "지정된 데드 주소로 전송된 레거시 XTC",
    "Migration Progress": "마이그레이션 진행",
    "of 21,000,000,000 XTC total supply": "XTC 총 공급량 21,000,000,000개 중",
    "Migrate Your Old Xitcoin for Xitcoin": "이전 Xitcoin을 Xitcoin으로 마이그레이션하세요",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Xitcoin(XTC) 마이그레이션은 기존 Old Xitcoin(XTC) 계약에서 새로운 업그레이드된 Xitcoin 스마트 계약으로의 원활한 전환을 보장합니다.",
    "secure proxy architecture.": "보안 프록시 아키텍처.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "새로운 프록시 기반 계약을 통해 토큰 보유량을 손상시키지 않으면서 블록체인 발전에 맞춰 향후 업그레이드가 가능합니다. 중요한 것은 대리계약",
    "does not permit any increase in token supply": "토큰 공급의 증가를 허용하지 않습니다.",
    "— it solely enables protocol improvements and compatibility updates over time.": "— 시간이 지남에 따라 프로토콜 개선 및 호환성 업데이트만 가능합니다.",
    "The migration uses a": "마이그레이션에서는",
    "1:1 ratio": "1:1 비율",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— 마이그레이션된 모든 기존 XTC 토큰에 대해 정확히 1개의 새로운 XTC 토큰이 수신됩니다. 기존 XTC 토큰은 다음과 같습니다.",
    "sent": "전송된",
    "to the designated": "지정된 사람에게",
    "dead address": "죽은 주소",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". 새로운 XTC 토큰은 거래가 온체인에서 확인된 후에만 수신됩니다.",
    "All migration transactions can be verified on the": "모든 마이그레이션 거래는 다음에서 확인할 수 있습니다.",
    "Cronos Explorer": "크로노스 탐험가",
    "Secure & Audited": "보안 및 감사됨",
    "Xitcoin has been audited by": "Xitcoin은 감사를 받았습니다.",
    "ensuring the integrity and security of the smart contract.": "스마트 계약의 무결성과 보안을 보장합니다.",
    "Fixed Supply": "고정공급",
    "The Xitcoin contract is established at a maximum of": "Xitcoin 계약은 최대로 설정됩니다.",
    ". No additional supply can ever be created.": ". 추가 공급을 생성할 수 없습니다.",
    "Fully Transparent": "완전 투명",
    "Every migration is recorded on-chain. Verify all transactions on the": "모든 마이그레이션은 온체인에 기록됩니다. 모든 거래를 확인하세요.",
    "View Cyberscope Audit": "Cyberscope 감사 보기",
    "Home": "집",
    "Old Xitcoin Whitepaper": "오래된 Xitcoin 백서",
    "Xitcoin Whitepaper": "Xitcoin 백서",
    "Migration": "이주",
    "MAX": "최대",
    "Old Xitcoin": "오래된 비트코인",
    "Xitcoin": "시트코인",
    "Approving...": "승인 중...",
    "Migrating...": "마이그레이션 중...",
    "Approve Old XTC And Migrate": "이전 XTC 승인 및 마이그레이션"
  },
  "ru": {
    "Connect Wallet": "Подключить кошелек",
    "Live Migration": "Живая миграция",
    "Migration Old Xitcoin": "Миграция старого Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Беспрепятственно перенесите свои устаревшие токены Old Xitcoin (XTC) на новый, обновленный смарт-контракт Xitcoin (XTC).",
    "One-Way": "В одну сторону",
    "You send": "Вы отправляете",
    "You receive": "Вы получаете",
    "Balance:": "Баланс:",
    "This migration is": "Эта миграция",
    "irreversible": "необратимый",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Старый XTC отправляется на указанный мертвый адрес. Вы получаете XTC после подтверждения транзакции в сети.",
    "Migrate Old XTC → XTC": "Перенос старого XTC → XTC",
    "Total legacy XTC sent": "Всего отправлено устаревших XTC",
    "Legacy XTC sent to the designated dead address": "Legacy XTC отправлен на указанный мертвый адрес",
    "Migration Progress": "Прогресс миграции",
    "of 21,000,000,000 XTC total supply": "из 21 000 000 000 общего количества XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Перенесите свой старый Xitcoin на Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Миграция Xitcoin (XTC) обеспечивает плавный переход от устаревшего контракта Old Xitcoin (XTC) к новому, обновленному смарт-контракту Xitcoin, построенному на",
    "secure proxy architecture.": "безопасная архитектура прокси.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Новый контракт на основе прокси позволяет осуществлять будущие обновления в соответствии с развитием блокчейна, не ставя под угрозу запасы токенов. Важно отметить, что прокси-контракт",
    "does not permit any increase in token supply": "не допускает увеличения количества токенов",
    "— it solely enables protocol improvements and compatibility updates over time.": "— он позволяет только с течением времени улучшать протокол и обновлять совместимость.",
    "The migration uses a": "Миграция использует",
    "1:1 ratio": "соотношение 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— за каждый мигрированный старый токен XTC будет получен ровно 1 новый токен XTC. Старые токены XTC",
    "sent": "отправил",
    "to the designated": "назначенному",
    "dead address": "мертвый адрес",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Новые токены XTC получаются только после подтверждения транзакции в сети.",
    "All migration transactions can be verified on the": "Все миграционные транзакции можно проверить на",
    "Cronos Explorer": "Кронос Исследователь",
    "Secure & Audited": "Безопасный и проверенный",
    "Xitcoin has been audited by": "Xitcoin был проверен",
    "ensuring the integrity and security of the smart contract.": "обеспечение целостности и безопасности смарт-контракта.",
    "Fixed Supply": "Фиксированная поставка",
    "The Xitcoin contract is established at a maximum of": "Контракт Xitcoin устанавливается на максимальную сумму",
    ". No additional supply can ever be created.": ". Никакое дополнительное предложение никогда не может быть создано.",
    "Fully Transparent": "Полностью прозрачный",
    "Every migration is recorded on-chain. Verify all transactions on the": "Каждая миграция записывается в цепочке. Подтверждайте все транзакции на",
    "View Cyberscope Audit": "Посмотреть аудит Cyberscope",
    "Home": "Дом",
    "Old Xitcoin Whitepaper": "Старый документ Xitcoin",
    "Xitcoin Whitepaper": "Технический документ Xitcoin",
    "Migration": "Миграция",
    "MAX": "МАКС",
    "Old Xitcoin": "Старый Кситкоин",
    "Xitcoin": "Кситкоин",
    "Approving...": "Одобрение...",
    "Migrating...": "Миграция...",
    "Approve Old XTC And Migrate": "Одобрить старый XTC и выполнить миграцию"
  },
  "tr": {
    "Connect Wallet": "Cüzdanı Bağla",
    "Live Migration": "Canlı Geçiş",
    "Migration Old Xitcoin": "Eski Xitcoin'e Geçiş",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Eski Eski Xitcoin (XTC) tokenlerinizi yeni, yükseltilmiş Xitcoin (XTC) akıllı sözleşmesine sorunsuz bir şekilde taşıyın.",
    "One-Way": "Tek Yön",
    "You send": "Sen gönder",
    "You receive": "Alırsın",
    "Balance:": "Denge:",
    "This migration is": "Bu göç",
    "irreversible": "geri döndürülemez",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Eski XTC belirlenen ölü adrese gönderilir. XTC'yi, işlem zincirde onaylandıktan sonra alırsınız.",
    "Migrate Old XTC → XTC": "Eski XTC'yi Taşı → XTC",
    "Total legacy XTC sent": "Gönderilen toplam eski XTC",
    "Legacy XTC sent to the designated dead address": "Eski XTC belirlenen ölü adrese gönderildi",
    "Migration Progress": "Taşıma İlerlemesi",
    "of 21,000,000,000 XTC total supply": "21.000.000.000 XTC toplam arzı",
    "Migrate Your Old Xitcoin for Xitcoin": "Eski Xitcoin'inizi Xitcoin'e Taşıyın",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Xitcoin (XTC) geçişi, eski Eski Xitcoin (XTC) sözleşmesinden yeni, yükseltilmiş Xitcoin akıllı sözleşmesine sorunsuz bir geçiş sağlar.",
    "secure proxy architecture.": "güvenli proxy mimarisi.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Yeni proxy tabanlı sözleşme, token stoklarından asla ödün vermeden, blockchain evrimiyle uyumlu gelecekteki yükseltmelere olanak tanıyor. Daha da önemlisi, vekalet sözleşmesi",
    "does not permit any increase in token supply": "token arzında herhangi bir artışa izin vermiyor",
    "— it solely enables protocol improvements and compatibility updates over time.": "— yalnızca zaman içinde protokol iyileştirmelerine ve uyumluluk güncellemelerine olanak tanır.",
    "The migration uses a": "Geçiş şunu kullanır:",
    "1:1 ratio": "1:1 oranı",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— Taşınan her Eski XTC jetonu için tam olarak 1 yeni XTC jetonu alınır. Eski XTC tokenleri",
    "sent": "gönderilmiş",
    "to the designated": "belirlenenlere",
    "dead address": "ölü adres",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Yeni XTC tokenleri yalnızca işlem zincirde onaylandıktan sonra alınır.",
    "All migration transactions can be verified on the": "Tüm geçiş işlemleri şu adreste doğrulanabilir:",
    "Cronos Explorer": "Cronos Kaşifi",
    "Secure & Audited": "Güvenli ve Denetlenmiş",
    "Xitcoin has been audited by": "Xitcoin tarafından denetlendi",
    "ensuring the integrity and security of the smart contract.": "Akıllı sözleşmenin bütünlüğünü ve güvenliğini sağlamak.",
    "Fixed Supply": "Sabit Tedarik",
    "The Xitcoin contract is established at a maximum of": "Xitcoin sözleşmesi maksimum olarak kurulur",
    ". No additional supply can ever be created.": ". Hiçbir zaman ek tedarik oluşturulamaz.",
    "Fully Transparent": "Tamamen Şeffaf",
    "Every migration is recorded on-chain. Verify all transactions on the": "Her geçiş zincir üzerinde kaydedilir. Tüm işlemleri doğrulayın",
    "View Cyberscope Audit": "Cyberscope Denetimini Görüntüle",
    "Home": "Ev",
    "Old Xitcoin Whitepaper": "Eski Xitcoin Teknik İncelemesi",
    "Xitcoin Whitepaper": "Xitcoin Teknik İncelemesi",
    "Migration": "Göç",
    "MAX": "MAKS",
    "Old Xitcoin": "Eski Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Onaylanıyor...",
    "Migrating...": "Taşınıyor...",
    "Approve Old XTC And Migrate": "Eski XTC'yi Onayla ve Taşı"
  },
  "bn": {
    "Connect Wallet": "ওয়ালেট সংযুক্ত করুন",
    "Live Migration": "লাইভ মাইগ্রেশন",
    "Migration Old Xitcoin": "মাইগ্রেশন পুরাতন Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "নির্বিঘ্নে নতুন, আপগ্রেড করা Xitcoin (XTC) স্মার্ট চুক্তিতে আপনার লিগ্যাসি ওল্ড Xitcoin (XTC) টোকেনগুলি স্থানান্তর করুন৷",
    "One-Way": "ওয়ান-ওয়ে",
    "You send": "আপনি পাঠান",
    "You receive": "আপনি গ্রহণ",
    "Balance:": "ভারসাম্য:",
    "This migration is": "এই অভিবাসন",
    "irreversible": "অপরিবর্তনীয়",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". পুরানো XTC নির্ধারিত মৃত ঠিকানায় পাঠানো হয়। লেনদেন অন-চেইন নিশ্চিত হওয়ার পরে আপনি XTC পাবেন।",
    "Migrate Old XTC → XTC": "পুরানো XTC → XTC মাইগ্রেট করুন৷",
    "Total legacy XTC sent": "মোট উত্তরাধিকার XTC পাঠানো হয়েছে",
    "Legacy XTC sent to the designated dead address": "লিগ্যাসি XTC নির্ধারিত মৃত ঠিকানায় পাঠানো হয়েছে",
    "Migration Progress": "মাইগ্রেশন অগ্রগতি",
    "of 21,000,000,000 XTC total supply": "21,000,000,000 XTC মোট সরবরাহ",
    "Migrate Your Old Xitcoin for Xitcoin": "Xitcoin এর জন্য আপনার পুরানো Xitcoin স্থানান্তর করুন",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Xitcoin (XTC) মাইগ্রেশন লিগ্যাসি ওল্ড Xitcoin (XTC) চুক্তি থেকে নতুন, আপগ্রেড করা Xitcoin স্মার্ট চুক্তিতে একটি বিরামহীন রূপান্তর নিশ্চিত করে",
    "secure proxy architecture.": "নিরাপদ প্রক্সি আর্কিটেকচার।",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "নতুন প্রক্সি-ভিত্তিক চুক্তিটি ব্লকচেইন বিবর্তনের সাথে সংযুক্ত ভবিষ্যতের আপগ্রেডের জন্য অনুমতি দেয়, কখনও টোকেন হোল্ডিংয়ের সাথে আপস না করে। গুরুত্বপূর্ণভাবে, প্রক্সি চুক্তি",
    "does not permit any increase in token supply": "টোকেন সরবরাহ বৃদ্ধির অনুমতি দেয় না",
    "— it solely enables protocol improvements and compatibility updates over time.": "— এটি শুধুমাত্র সময়ের সাথে প্রোটোকলের উন্নতি এবং সামঞ্জস্য আপডেটগুলিকে সক্ষম করে৷",
    "The migration uses a": "মাইগ্রেশন ব্যবহার করে a",
    "1:1 ratio": "1:1 অনুপাত",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— স্থানান্তরিত প্রতিটি পুরানো XTC টোকেনের জন্য, ঠিক 1টি নতুন XTC টোকেন প্রাপ্ত হয়। পুরানো XTC টোকেন হয়",
    "sent": "পাঠানো",
    "to the designated": "মনোনীত করার জন্য",
    "dead address": "মৃত ঠিকানা",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". নতুন XTC টোকেন প্রাপ্ত হয় শুধুমাত্র লেনদেন অন-চেইন নিশ্চিত হওয়ার পরে।",
    "All migration transactions can be verified on the": "সমস্ত মাইগ্রেশন লেনদেন যাচাই করা যেতে পারে",
    "Cronos Explorer": "ক্রোনোস এক্সপ্লোরার",
    "Secure & Audited": "নিরাপদ ও নিরীক্ষিত",
    "Xitcoin has been audited by": "Xitcoin দ্বারা নিরীক্ষিত হয়েছে",
    "ensuring the integrity and security of the smart contract.": "স্মার্ট চুক্তির অখণ্ডতা এবং নিরাপত্তা নিশ্চিত করা।",
    "Fixed Supply": "ফিক্সড সাপ্লাই",
    "The Xitcoin contract is established at a maximum of": "Xitcoin চুক্তি সর্বোচ্চ প্রতিষ্ঠিত হয়",
    ". No additional supply can ever be created.": ". কোন অতিরিক্ত সরবরাহ কখনও তৈরি করা যাবে না.",
    "Fully Transparent": "সম্পূর্ণ স্বচ্ছ",
    "Every migration is recorded on-chain. Verify all transactions on the": "প্রতিটি মাইগ্রেশন অন-চেইন রেকর্ড করা হয়। সব লেনদেন যাচাই করুন",
    "View Cyberscope Audit": "সাইবারস্কোপ অডিট দেখুন",
    "Home": "বাড়ি",
    "Old Xitcoin Whitepaper": "পুরানো Xitcoin সাদা কাগজ",
    "Xitcoin Whitepaper": "Xitcoin হোয়াইটপেপার",
    "Migration": "মাইগ্রেশন",
    "MAX": "MAX",
    "Old Xitcoin": "পুরানো Xitcoin",
    "Xitcoin": "জিটকয়েন",
    "Approving...": "অনুমোদন করা হচ্ছে...",
    "Migrating...": "স্থানান্তরিত হচ্ছে...",
    "Approve Old XTC And Migrate": "পুরানো XTC অনুমোদন করুন এবং মাইগ্রেট করুন"
  },
  "cs": {
    "Connect Wallet": "Připojte Peněženku",
    "Live Migration": "Živá migrace",
    "Migration Old Xitcoin": "Migrace starých Xitcoinů",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Bezproblémově migrujte své staré tokeny Old Xitcoin (XTC) do nové, vylepšené chytré smlouvy Xitcoin (XTC).",
    "One-Way": "Jednosměrný",
    "You send": "Vy pošlete",
    "You receive": "dostáváte",
    "Balance:": "Váhy:",
    "This migration is": "Tato migrace je",
    "irreversible": "nevratné",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Staré XTC je odesláno na určenou mrtvou adresu. XTC obdržíte po potvrzení transakce na řetězci.",
    "Migrate Old XTC → XTC": "Migrujte staré XTC → XTC",
    "Total legacy XTC sent": "Celkem odesláno starší XTC",
    "Legacy XTC sent to the designated dead address": "Legacy XTC odesláno na určenou mrtvou adresu",
    "Migration Progress": "Průběh migrace",
    "of 21,000,000,000 XTC total supply": "z celkové dodávky 21 000 000 000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Migrujte svůj starý Xitcoin za Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Migrace Xitcoinů (XTC) zajišťuje bezproblémový přechod od staré smlouvy o starých Xitcoinech (XTC) k nové, vylepšené chytré smlouvě Xitcoin postavené na",
    "secure proxy architecture.": "zabezpečená proxy architektura.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Nová smlouva založená na proxy umožňuje budoucí upgrady v souladu s vývojem blockchainu, aniž by došlo k ohrožení držby tokenů. Důležité je, že smlouva o zastoupení",
    "does not permit any increase in token supply": "neumožňuje žádné zvýšení zásoby tokenů",
    "— it solely enables protocol improvements and compatibility updates over time.": "— umožňuje pouze vylepšování protokolů a aktualizace kompatibility v průběhu času.",
    "The migration uses a": "Migrace využívá a",
    "1:1 ratio": "poměr 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— za každý migrovaný starý token XTC je přijat přesně 1 nový token XTC. Staré XTC tokeny jsou",
    "sent": "odesláno",
    "to the designated": "k určenému",
    "dead address": "mrtvá adresa",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Nové XTC tokeny jsou přijímány až po potvrzení transakce v řetězci.",
    "All migration transactions can be verified on the": "Všechny migrační transakce lze ověřit na",
    "Cronos Explorer": "Průzkumník Cronos",
    "Secure & Audited": "Zabezpečené a auditované",
    "Xitcoin has been audited by": "Xitcoin prošel auditem",
    "ensuring the integrity and security of the smart contract.": "zajištění integrity a bezpečnosti chytré smlouvy.",
    "Fixed Supply": "Pevná dodávka",
    "The Xitcoin contract is established at a maximum of": "Smlouva o Xitcoinu je uzavřena na max",
    ". No additional supply can ever be created.": ". Nikdy nelze vytvořit žádnou dodatečnou zásobu.",
    "Fully Transparent": "Plně transparentní",
    "Every migration is recorded on-chain. Verify all transactions on the": "Každá migrace je zaznamenána v řetězci. Ověřte všechny transakce na",
    "View Cyberscope Audit": "Zobrazit Cyberscope Audit",
    "Home": "Domov",
    "Old Xitcoin Whitepaper": "Starý Xitcoin Whitepaper",
    "Xitcoin Whitepaper": "Xitcoin Whitepaper",
    "Migration": "Migrace",
    "MAX": "MAX",
    "Old Xitcoin": "Starý Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Schvalování...",
    "Migrating...": "Migrace...",
    "Approve Old XTC And Migrate": "Schválit staré XTC a migrovat"
  },
  "da": {
    "Connect Wallet": "Tilslut tegnebog",
    "Live Migration": "Live migration",
    "Migration Old Xitcoin": "Migration Gamle Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Migrér problemfrit dine ældre gamle Xitcoin (XTC) tokens til den nye, opgraderede Xitcoin (XTC) smart kontrakt.",
    "One-Way": "Envejs",
    "You send": "Du sender",
    "You receive": "Du modtager",
    "Balance:": "Balance:",
    "This migration is": "Denne migration er",
    "irreversible": "irreversible",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Gammel XTC sendes til den angivne døde adresse. Du modtager XTC efter transaktionen er bekræftet på kæden.",
    "Migrate Old XTC → XTC": "Migrer gammel XTC → XTC",
    "Total legacy XTC sent": "Samlet legacy XTC sendt",
    "Legacy XTC sent to the designated dead address": "Legacy XTC sendt til den angivne døde adresse",
    "Migration Progress": "Migrationsfremskridt",
    "of 21,000,000,000 XTC total supply": "af 21.000.000.000 XTC samlet forsyning",
    "Migrate Your Old Xitcoin for Xitcoin": "Migrer din gamle Xitcoin til Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Xitcoin (XTC)-migreringen sikrer en problemfri overgang fra den gamle Old Xitcoin (XTC) kontrakt til den nye, opgraderede Xitcoin smart kontrakt bygget på en",
    "secure proxy architecture.": "sikker proxy-arkitektur.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Den nye proxy-baserede kontrakt giver mulighed for fremtidige opgraderinger i overensstemmelse med blockchain-evolution, uden nogensinde at gå på kompromis med token-beholdningen. Vigtigt, fuldmagtskontrakten",
    "does not permit any increase in token supply": "tillader ikke nogen stigning i token-udbuddet",
    "— it solely enables protocol improvements and compatibility updates over time.": "— det muliggør udelukkende protokolforbedringer og kompatibilitetsopdateringer over tid.",
    "The migration uses a": "Migrationen bruger en",
    "1:1 ratio": "1:1 forhold",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— for hvert gammelt XTC-token, der migreres, modtages nøjagtigt 1 nyt XTC-token. Gamle XTC-tokens er",
    "sent": "sendt",
    "to the designated": "til den udpegede",
    "dead address": "død adresse",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Nye XTC-tokens modtages først, efter at transaktionen er bekræftet på kæden.",
    "All migration transactions can be verified on the": "Alle migreringstransaktioner kan verificeres på",
    "Cronos Explorer": "Cronos Explorer",
    "Secure & Audited": "Sikker & Revideret",
    "Xitcoin has been audited by": "Xitcoin er blevet revideret af",
    "ensuring the integrity and security of the smart contract.": "at sikre integriteten og sikkerheden af ​​den smarte kontrakt.",
    "Fixed Supply": "Fast forsyning",
    "The Xitcoin contract is established at a maximum of": "Xitcoin-kontrakten er etableret til maksimalt",
    ". No additional supply can ever be created.": ". Der kan aldrig skabes yderligere forsyninger.",
    "Fully Transparent": "Fuldt gennemsigtig",
    "Every migration is recorded on-chain. Verify all transactions on the": "Hver migration registreres på kæden. Bekræft alle transaktioner på",
    "View Cyberscope Audit": "Se Cyberscope Audit",
    "Home": "Hjem",
    "Old Xitcoin Whitepaper": "Gammel Xitcoin hvidbog",
    "Xitcoin Whitepaper": "Xitcoin hvidbog",
    "Migration": "Migration",
    "MAX": "MAKS",
    "Old Xitcoin": "Gammel Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Godkender...",
    "Migrating...": "Migrerer...",
    "Approve Old XTC And Migrate": "Godkend gammel XTC og migrér"
  },
  "el": {
    "Connect Wallet": "Σύνδεση Πορτοφολιού",
    "Live Migration": "Ζωντανή Μετανάστευση",
    "Migration Old Xitcoin": "Μετανάστευση Παλαιού Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Μεταφέρετε απρόσκοπτα τα παλαιού τύπου μάρκες Xitcoin (XTC) στο νέο, αναβαθμισμένο έξυπνο συμβόλαιο Xitcoin (XTC).",
    "One-Way": "Μονόδρομος",
    "You send": "Στέλνεις",
    "You receive": "Λαμβάνετε",
    "Balance:": "Ισορροπία:",
    "This migration is": "Αυτή η μετανάστευση είναι",
    "irreversible": "αμετάκλητος",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Το παλιό XTC αποστέλλεται στην καθορισμένη νεκρή διεύθυνση. Λαμβάνετε XTC μετά την επιβεβαίωση της συναλλαγής στην αλυσίδα.",
    "Migrate Old XTC → XTC": "Μεταφορά παλαιού XTC → XTC",
    "Total legacy XTC sent": "Αποστολή συνόλου παλαιού τύπου XTC",
    "Legacy XTC sent to the designated dead address": "Το XTC παλαιού τύπου αποστέλλεται στην καθορισμένη νεκρή διεύθυνση",
    "Migration Progress": "Πρόοδος Μετανάστευσης",
    "of 21,000,000,000 XTC total supply": "συνολικής προμήθειας 21.000.000.000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Μεταφέρετε το παλιό σας Xitcoin για το Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Η μετεγκατάσταση του Xitcoin (XTC) διασφαλίζει την απρόσκοπτη μετάβαση από το παλαιού τύπου συμβόλαιο Old Xitcoin (XTC) στο νέο, αναβαθμισμένο έξυπνο συμβόλαιο Xitcoin που βασίζεται σε",
    "secure proxy architecture.": "ασφαλής αρχιτεκτονική διακομιστή μεσολάβησης.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Το νέο συμβόλαιο που βασίζεται σε διακομιστή μεσολάβησης επιτρέπει μελλοντικές αναβαθμίσεις που ευθυγραμμίζονται με την εξέλιξη της αλυσίδας μπλοκ, χωρίς ποτέ να διακυβεύονται οι διαθέσεις διακριτικών. Σημαντικό, το συμβόλαιο πληρεξουσίου",
    "does not permit any increase in token supply": "δεν επιτρέπει καμία αύξηση της προσφοράς διακριτικών",
    "— it solely enables protocol improvements and compatibility updates over time.": "— επιτρέπει μόνο βελτιώσεις πρωτοκόλλου και ενημερώσεις συμβατότητας με την πάροδο του χρόνου.",
    "The migration uses a": "Η μετανάστευση χρησιμοποιεί α",
    "1:1 ratio": "αναλογία 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— για κάθε παλιό διακριτικό XTC που μετεγκαταστάθηκε, λαμβάνεται ακριβώς 1 νέο διακριτικό XTC. Τα παλιά κουπόνια XTC είναι",
    "sent": "έστειλε",
    "to the designated": "στους ορισθέντες",
    "dead address": "νεκρή διεύθυνση",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Τα νέα διακριτικά XTC λαμβάνονται μόνο μετά την επιβεβαίωση της συναλλαγής στην αλυσίδα.",
    "All migration transactions can be verified on the": "Όλες οι συναλλαγές μετεγκατάστασης μπορούν να επαληθευτούν στο",
    "Cronos Explorer": "Cronos Explorer",
    "Secure & Audited": "Ασφαλές & ελεγμένο",
    "Xitcoin has been audited by": "Το Xitcoin έχει ελεγχθεί από",
    "ensuring the integrity and security of the smart contract.": "διασφαλίζοντας την ακεραιότητα και την ασφάλεια του έξυπνου συμβολαίου.",
    "Fixed Supply": "Σταθερή Προμήθεια",
    "The Xitcoin contract is established at a maximum of": "Το συμβόλαιο Xitcoin συνάπτεται το πολύ",
    ". No additional supply can ever be created.": ". Δεν μπορεί ποτέ να δημιουργηθεί πρόσθετη παροχή.",
    "Fully Transparent": "Πλήρως διαφανές",
    "Every migration is recorded on-chain. Verify all transactions on the": "Κάθε μετανάστευση καταγράφεται στην αλυσίδα. Επαληθεύστε όλες τις συναλλαγές στο",
    "View Cyberscope Audit": "Προβολή ελέγχου Cyberscope",
    "Home": "Σπίτι",
    "Old Xitcoin Whitepaper": "Παλιά Λευκή Βίβλος Xitcoin",
    "Xitcoin Whitepaper": "Λευκή Βίβλος Xitcoin",
    "Migration": "Μετανάστευση",
    "MAX": "ΜΕΓ",
    "Old Xitcoin": "Παλιό Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Έγκριση...",
    "Migrating...": "Μετανάστευση...",
    "Approve Old XTC And Migrate": "Εγκρίνετε το παλιό XTC και μεταφέρετε"
  }
}

Object.assign(locales, {
  "it": {
    "label": "🇮🇹 IT",
    "language": "it",
    "direction": "ltr",
    "reference": "Le traduzioni sono fornite per comodità. In caso di discrepanze, fa fede la versione inglese."
  },
  "ko": {
    "label": "🇰🇷 KO",
    "language": "ko",
    "direction": "ltr",
    "reference": "편의를 위해 번역이 제공됩니다. 불일치하는 경우 영어 버전이 참조됩니다."
  },
  "ru": {
    "label": "🇷🇺 RU",
    "language": "ru",
    "direction": "ltr",
    "reference": "Переводы предоставлены для удобства. В случае расхождений справочной информацией является английская версия."
  },
  "tr": {
    "label": "🇹🇷 TR",
    "language": "tr",
    "direction": "ltr",
    "reference": "Kolaylık sağlamak için çeviriler sağlanmıştır. Tutarsızlık durumunda İngilizce versiyon referanstır."
  },
  "bn": {
    "label": "🇧🇩 BN",
    "language": "bn",
    "direction": "ltr",
    "reference": "অনুবাদ সুবিধার জন্য প্রদান করা হয়. অমিলের ক্ষেত্রে, ইংরেজি সংস্করণটি রেফারেন্স।"
  },
  "cs": {
    "label": "🇨🇿 CS",
    "language": "cs",
    "direction": "ltr",
    "reference": "Pro pohodlí jsou poskytovány překlady. V případě nesrovnalostí je referenční anglická verze."
  },
  "da": {
    "label": "🇩🇰 DA",
    "language": "da",
    "direction": "ltr",
    "reference": "Oversættelser leveres for nemheds skyld. I tilfælde af uoverensstemmelse er den engelske version referencen."
  },
  "el": {
    "label": "🇬🇷 EL",
    "language": "el",
    "direction": "ltr",
    "reference": "Παρέχονται μεταφράσεις για διευκόλυνση. Σε περίπτωση ασυμφωνίας, η αγγλική έκδοση είναι η αναφορά."
  }
})
Object.assign(translations, GeneratedBatchOne)

const GeneratedBatchTwo = {
  "fa": {
    "Connect Wallet": "کیف پول را وصل کنید",
    "Live Migration": "مهاجرت زنده",
    "Migration Old Xitcoin": "مهاجرت Xitcoin قدیمی",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "توکن های قدیمی Xitcoin (XTC) خود را به طور یکپارچه به قرارداد هوشمند جدید و ارتقا یافته Xitcoin (XTC) منتقل کنید.",
    "One-Way": "یک طرفه",
    "You send": "شما بفرستید",
    "You receive": "شما دریافت می کنید",
    "Balance:": "تعادل:",
    "This migration is": "این مهاجرت است",
    "irreversible": "غیر قابل برگشت",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". XTC قدیمی به آدرس مرده تعیین شده ارسال می شود. پس از تایید تراکنش در زنجیره، XTC را دریافت می کنید.",
    "Migrate Old XTC → XTC": "XTC قدیمی → XTC را مهاجرت کنید",
    "Total legacy XTC sent": "کل XTC قدیمی ارسال شد",
    "Legacy XTC sent to the designated dead address": "Legacy XTC به آدرس مرده تعیین شده ارسال شد",
    "Migration Progress": "پیشرفت مهاجرت",
    "of 21,000,000,000 XTC total supply": "از 21,000,000,000 XTC کل عرضه",
    "Migrate Your Old Xitcoin for Xitcoin": "Xitcoin قدیمی خود را برای Xitcoin مهاجرت کنید",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "مهاجرت Xitcoin (XTC) انتقال یکپارچه از قرارداد قدیمی Xitcoin (XTC) به قرارداد هوشمند جدید و ارتقا یافته Xitcoin را تضمین می کند.",
    "secure proxy architecture.": "معماری پروکسی امن",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "قرارداد جدید مبتنی بر پروکسی امکان ارتقاءهای آینده را که با تکامل بلاک چین همسو هستند، بدون به خطر انداختن ذخایر توکن فراهم می کند. نکته مهم، قرارداد وکالت است",
    "does not permit any increase in token supply": "اجازه افزایش عرضه توکن را نمی دهد",
    "— it solely enables protocol improvements and compatibility updates over time.": "- صرفاً بهبود پروتکل و به روز رسانی سازگاری را در طول زمان فعال می کند.",
    "The migration uses a": "مهاجرت از a استفاده می کند",
    "1:1 ratio": "نسبت 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "- به ازای هر توکن قدیمی XTC منتقل شده، دقیقاً 1 توکن XTC جدید دریافت می شود. توکن های قدیمی XTC هستند",
    "sent": "فرستاده شد",
    "to the designated": "به تعیین شده",
    "dead address": "آدرس مرده",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". توکن های XTC جدید تنها پس از تایید تراکنش در زنجیره دریافت می شوند.",
    "All migration transactions can be verified on the": "همه تراکنش‌های مهاجرت را می‌توان بر روی آن تأیید کرد",
    "Cronos Explorer": "Cronos Explorer",
    "Secure & Audited": "ایمن و حسابرسی شده",
    "Xitcoin has been audited by": "Xitcoin توسط حسابرسی شده است",
    "ensuring the integrity and security of the smart contract.": "تضمین یکپارچگی و امنیت قرارداد هوشمند.",
    "Fixed Supply": "تامین ثابت",
    "The Xitcoin contract is established at a maximum of": "قرارداد Xitcoin در حداکثر زمان ایجاد می شود",
    ". No additional supply can ever be created.": ". هیچ منبع اضافی هرگز نمی تواند ایجاد شود.",
    "Fully Transparent": "کاملا شفاف",
    "Every migration is recorded on-chain. Verify all transactions on the": "هر مهاجرت در زنجیره ثبت می شود. تمام تراکنش ها را تأیید کنید",
    "View Cyberscope Audit": "مشاهده سایبرسکوپ حسابرسی",
    "Home": "صفحه اصلی",
    "Old Xitcoin Whitepaper": "کاغذ سفید قدیمی Xitcoin",
    "Xitcoin Whitepaper": "وایت پیپر Xitcoin",
    "Migration": "مهاجرت",
    "MAX": "حداکثر",
    "Old Xitcoin": "Xitcoin قدیمی",
    "Xitcoin": "Xitcoin",
    "Approving...": "تایید...",
    "Migrating...": "مهاجرت...",
    "Approve Old XTC And Migrate": "XTC قدیمی را تایید کنید و مهاجرت کنید"
  },
  "fil": {
    "Connect Wallet": "Ikonekta ang Wallet",
    "Live Migration": "Live Migration",
    "Migration Old Xitcoin": "Migration Lumang Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Walang putol na i-migrate ang iyong legacy na Old Xitcoin (XTC) token sa bago, na-upgrade na Xitcoin (XTC) smart contract.",
    "One-Way": "One-Way",
    "You send": "magpadala ka",
    "You receive": "Matatanggap mo",
    "Balance:": "Balanse:",
    "This migration is": "Ang migration na ito ay",
    "irreversible": "hindi maibabalik",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Ang lumang XTC ay ipinadala sa itinalagang patay na address. Makakatanggap ka ng XTC pagkatapos makumpirma ang transaksyon sa chain.",
    "Migrate Old XTC → XTC": "I-migrate ang Lumang XTC → XTC",
    "Total legacy XTC sent": "Kabuuang legacy na ipinadala ng XTC",
    "Legacy XTC sent to the designated dead address": "Ipinadala ang Legacy XTC sa itinalagang patay na address",
    "Migration Progress": "Pag-unlad ng Migrasyon",
    "of 21,000,000,000 XTC total supply": "ng 21,000,000,000 XTC kabuuang supply",
    "Migrate Your Old Xitcoin for Xitcoin": "Ilipat ang Iyong Lumang Xitcoin para sa Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Tinitiyak ng paglipat ng Xitcoin (XTC) ang isang tuluy-tuloy na paglipat mula sa legacy na Old Xitcoin (XTC) na kontrata patungo sa bago, na-upgrade na Xitcoin smart contract na binuo sa isang",
    "secure proxy architecture.": "secure na proxy architecture.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Ang bagong kontrata na nakabatay sa proxy ay nagbibigay-daan para sa mga pag-upgrade sa hinaharap na nakahanay sa ebolusyon ng blockchain, nang hindi kailanman nakompromiso ang mga hawak na token. Ang mahalaga, ang proxy contract",
    "does not permit any increase in token supply": "hindi pinahihintulutan ang anumang pagtaas sa supply ng token",
    "— it solely enables protocol improvements and compatibility updates over time.": "— pinapagana lang nito ang mga pagpapabuti ng protocol at mga update sa compatibility sa paglipas ng panahon.",
    "The migration uses a": "Ang migrasyon ay gumagamit ng a",
    "1:1 ratio": "1:1 ratio",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— para sa bawat Lumang XTC token na inilipat, eksaktong 1 bagong XTC token ang matatanggap. Ang mga lumang XTC token ay",
    "sent": "ipinadala",
    "to the designated": "sa itinalaga",
    "dead address": "patay na address",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Ang mga bagong XTC token ay matatanggap lamang pagkatapos makumpirma ang transaksyon na on-chain.",
    "All migration transactions can be verified on the": "Ang lahat ng mga transaksyon sa paglipat ay maaaring ma-verify sa",
    "Cronos Explorer": "Cronos Explorer",
    "Secure & Audited": "Secure at Na-audit",
    "Xitcoin has been audited by": "Ang Xitcoin ay na-audit ni",
    "ensuring the integrity and security of the smart contract.": "tinitiyak ang integridad at seguridad ng matalinong kontrata.",
    "Fixed Supply": "Nakapirming Supply",
    "The Xitcoin contract is established at a maximum of": "Ang kontrata ng Xitcoin ay itinatag sa maximum na",
    ". No additional supply can ever be created.": ". Walang karagdagang supply ang maaaring gawin.",
    "Fully Transparent": "Ganap na Transparent",
    "Every migration is recorded on-chain. Verify all transactions on the": "Ang bawat paglipat ay naitala on-chain. I-verify ang lahat ng transaksyon sa",
    "View Cyberscope Audit": "Tingnan ang Cyberscope Audit",
    "Home": "Bahay",
    "Old Xitcoin Whitepaper": "Lumang Xitcoin Whitepaper",
    "Xitcoin Whitepaper": "Xitcoin Whitepaper",
    "Migration": "Migration",
    "MAX": "MAX",
    "Old Xitcoin": "Lumang Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Inaprubahan...",
    "Migrating...": "Lumilipat...",
    "Approve Old XTC And Migrate": "Aprubahan ang Lumang XTC At Mag-migrate"
  },
  "he": {
    "Connect Wallet": "חבר ארנק",
    "Live Migration": "הגירה חיה",
    "Migration Old Xitcoin": "הגירה ישן Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "העבר בצורה חלקה את אסימוני ה-Xitcoin הישן (XTC) שלך לחוזה החכם החדש והמשודרג של Xitcoin (XTC).",
    "One-Way": "חַד סִטרִי",
    "You send": "אתה שולח",
    "You receive": "אתה מקבל",
    "Balance:": "לְאַזֵן:",
    "This migration is": "הגירה זו היא",
    "irreversible": "בלתי הפיך",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". XTC ישן נשלח לכתובת המתה המיועדת. אתה מקבל XTC לאחר אישור העסקה בשרשרת.",
    "Migrate Old XTC → XTC": "העבר XTC ישן → XTC",
    "Total legacy XTC sent": "XTC מדור קודם נשלח",
    "Legacy XTC sent to the designated dead address": "Legacy XTC נשלח לכתובת המתה המיועדת",
    "Migration Progress": "התקדמות הגירה",
    "of 21,000,000,000 XTC total supply": "מתוך אספקה ​​כוללת של 21,000,000,000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "העבר את ה-Xitcoin הישן שלך עבור Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "הגירת Xitcoin (XTC) מבטיחה מעבר חלק מחוזה הישן Xitcoin (XTC) לחוזה החכם החדש והמשודרג של Xitcoin הבנוי על",
    "secure proxy architecture.": "ארכיטקטורת פרוקסי מאובטחת.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "החוזה החדש המבוסס על פרוקסי מאפשר שדרוגים עתידיים בהתאמה לאבולוציית הבלוקצ'יין, מבלי להתפשר על החזקות אסימונים. חשוב לציין, חוזה מיופה הכוח",
    "does not permit any increase in token supply": "אינו מתיר כל הגדלת היצע האסימונים",
    "— it solely enables protocol improvements and compatibility updates over time.": "- הוא מאפשר אך ורק שיפורי פרוטוקול ועדכוני תאימות לאורך זמן.",
    "The migration uses a": "ההגירה משתמשת ב-a",
    "1:1 ratio": "יחס 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "- עבור כל אסימון XTC ישן שהועבר, מתקבל בדיוק אסימון XTC חדש אחד. אסימוני XTC ישנים הם",
    "sent": "נשלח",
    "to the designated": "למיועד",
    "dead address": "כתובת מתה",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". אסימוני XTC חדשים מתקבלים רק לאחר אישור העסקה בשרשרת.",
    "All migration transactions can be verified on the": "ניתן לאמת את כל עסקאות ההגירה ב-",
    "Cronos Explorer": "Cronos Explorer",
    "Secure & Audited": "מאובטח ומבוקרת",
    "Xitcoin has been audited by": "Xitcoin נבדק על ידי",
    "ensuring the integrity and security of the smart contract.": "הבטחת שלמות ואבטחת החוזה החכם.",
    "Fixed Supply": "אספקה ​​קבועה",
    "The Xitcoin contract is established at a maximum of": "חוזה Xitcoin נקבע על מקסימום של",
    ". No additional supply can ever be created.": ". לעולם לא ניתן ליצור אספקה ​​נוספת.",
    "Fully Transparent": "שקוף לחלוטין",
    "Every migration is recorded on-chain. Verify all transactions on the": "כל הגירה מתועדת על השרשרת. אמת את כל העסקאות ב-",
    "View Cyberscope Audit": "הצג ביקורת Cyberscope",
    "Home": "בַּיִת",
    "Old Xitcoin Whitepaper": "ספר לבן ישן של Xitcoin",
    "Xitcoin Whitepaper": "ספר לבן של Xitcoin",
    "Migration": "הֲגִירָה",
    "MAX": "MAX",
    "Old Xitcoin": "Xitcoin ישן",
    "Xitcoin": "Xitcoin",
    "Approving...": "מאשר...",
    "Migrating...": "עובר...",
    "Approve Old XTC And Migrate": "אשר את XTC הישן והעבר"
  },
  "hi": {
    "Connect Wallet": "वॉलेट कनेक्ट करें",
    "Live Migration": "लाइव प्रवासन",
    "Migration Old Xitcoin": "माइग्रेशन ओल्ड ज़िटकॉइन",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "अपने पुराने पुराने Xitcoin (XTC) टोकन को नए, उन्नत Xitcoin (XTC) स्मार्ट अनुबंध में निर्बाध रूप से स्थानांतरित करें।",
    "One-Way": "एक तरफ़ा रास्ता",
    "You send": "आप भेजो",
    "You receive": "आपको प्राप्त हुया",
    "Balance:": "संतुलन:",
    "This migration is": "ये माइग्रेशन है",
    "irreversible": "अचल",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". पुराने XTC को निर्दिष्ट मृत पते पर भेजा जाता है। ऑन-चेन लेनदेन की पुष्टि होने के बाद आपको XTC प्राप्त होता है।",
    "Migrate Old XTC → XTC": "पुराने XTC → XTC को माइग्रेट करें",
    "Total legacy XTC sent": "कुल लीगेसी XTC भेजी गई",
    "Legacy XTC sent to the designated dead address": "लिगेसी XTC निर्दिष्ट मृत पते पर भेजा गया",
    "Migration Progress": "प्रवास प्रगति",
    "of 21,000,000,000 XTC total supply": "21,000,000,000 XTC की कुल आपूर्ति",
    "Migrate Your Old Xitcoin for Xitcoin": "अपने पुराने Xitcoin को Xitcoin में माइग्रेट करें",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Xitcoin (XTC) माइग्रेशन पुराने पुराने Xitcoin (XTC) अनुबंध से नए, उन्नत Xitcoin स्मार्ट अनुबंध पर निर्मित एक निर्बाध संक्रमण सुनिश्चित करता है।",
    "secure proxy architecture.": "सुरक्षित प्रॉक्सी आर्किटेक्चर।",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "नया प्रॉक्सी-आधारित अनुबंध टोकन होल्डिंग्स से समझौता किए बिना, ब्लॉकचेन विकास के साथ भविष्य में अपग्रेड करने की अनुमति देता है। महत्वपूर्ण रूप से, प्रॉक्सी अनुबंध",
    "does not permit any increase in token supply": "टोकन आपूर्ति में किसी भी वृद्धि की अनुमति नहीं देता है",
    "— it solely enables protocol improvements and compatibility updates over time.": "- यह केवल समय के साथ प्रोटोकॉल में सुधार और संगतता अपडेट को सक्षम बनाता है।",
    "The migration uses a": "माइग्रेशन का उपयोग करता है a",
    "1:1 ratio": "1:1 अनुपात",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "- प्रत्येक पुराने XTC टोकन के माइग्रेट होने पर, ठीक 1 नया XTC टोकन प्राप्त होता है। पुराने XTC टोकन हैं",
    "sent": "भेजा",
    "to the designated": "नामित को",
    "dead address": "मृत पता",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". नए XTC टोकन ऑन-चेन लेनदेन की पुष्टि होने के बाद ही प्राप्त होते हैं।",
    "All migration transactions can be verified on the": "सभी माइग्रेशन लेनदेन को सत्यापित किया जा सकता है",
    "Cronos Explorer": "क्रोनोस एक्सप्लोरर",
    "Secure & Audited": "सुरक्षित एवं अंकेक्षित",
    "Xitcoin has been audited by": "Xitcoin का ऑडिट किया गया है",
    "ensuring the integrity and security of the smart contract.": "स्मार्ट अनुबंध की अखंडता और सुरक्षा सुनिश्चित करना।",
    "Fixed Supply": "निश्चित आपूर्ति",
    "The Xitcoin contract is established at a maximum of": "Xitcoin अनुबंध अधिकतम पर स्थापित किया गया है",
    ". No additional supply can ever be created.": ". कभी भी कोई अतिरिक्त आपूर्ति नहीं बनाई जा सकती.",
    "Fully Transparent": "पूर्णतः पारदर्शी",
    "Every migration is recorded on-chain. Verify all transactions on the": "प्रत्येक माइग्रेशन को ऑन-चेन रिकॉर्ड किया जाता है। पर सभी लेन-देन सत्यापित करें",
    "View Cyberscope Audit": "साइबरस्कोप ऑडिट देखें",
    "Home": "घर",
    "Old Xitcoin Whitepaper": "पुराना Xitcoin श्वेतपत्र",
    "Xitcoin Whitepaper": "Xitcoin श्वेतपत्र",
    "Migration": "प्रवास",
    "MAX": "मैक्स",
    "Old Xitcoin": "पुराना ज़िटकॉइन",
    "Xitcoin": "ज़िटकॉइन",
    "Approving...": "अनुमोदन...",
    "Migrating...": "पलायन...",
    "Approve Old XTC And Migrate": "पुराने XTC को स्वीकृत करें और माइग्रेट करें"
  },
  "id": {
    "Connect Wallet": "Hubungkan Dompet",
    "Live Migration": "Migrasi Langsung",
    "Migration Old Xitcoin": "Migrasi Xitcoin Lama",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Migrasikan token Xitcoin Lama (XTC) lama Anda dengan mulus ke kontrak pintar Xitcoin (XTC) yang baru dan ditingkatkan.",
    "One-Way": "SATU ARAH",
    "You send": "Anda mengirim",
    "You receive": "Anda menerima",
    "Balance:": "Keseimbangan:",
    "This migration is": "Migrasi ini adalah",
    "irreversible": "tidak dapat diubah",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". XTC lama dikirim ke alamat mati yang ditentukan. Anda menerima XTC setelah transaksi dikonfirmasi secara on-chain.",
    "Migrate Old XTC → XTC": "Migrasi XTC Lama → XTC",
    "Total legacy XTC sent": "Total XTC lama yang dikirim",
    "Legacy XTC sent to the designated dead address": "XTC lama dikirim ke alamat mati yang ditentukan",
    "Migration Progress": "Kemajuan Migrasi",
    "of 21,000,000,000 XTC total supply": "dari total pasokan 21.000.000.000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Migrasikan Xitcoin Lama Anda ke Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Migrasi Xitcoin (XTC) memastikan transisi yang mulus dari kontrak lama Xitcoin (XTC) ke kontrak pintar Xitcoin baru yang ditingkatkan yang dibangun di atas",
    "secure proxy architecture.": "arsitektur proxy yang aman.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Kontrak berbasis proxy yang baru memungkinkan peningkatan di masa depan selaras dengan evolusi blockchain, tanpa pernah mengorbankan kepemilikan token. Yang penting, kontrak proxy",
    "does not permit any increase in token supply": "tidak mengizinkan peningkatan pasokan token",
    "— it solely enables protocol improvements and compatibility updates over time.": "— ini hanya memungkinkan peningkatan protokol dan pembaruan kompatibilitas seiring waktu.",
    "The migration uses a": "Migrasi tersebut menggunakan a",
    "1:1 ratio": "rasio 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— untuk setiap token XTC Lama yang dimigrasikan, tepat 1 token XTC baru akan diterima. Token XTC lama adalah",
    "sent": "terkirim",
    "to the designated": "kepada yang ditunjuk",
    "dead address": "alamat mati",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Token XTC baru diterima hanya setelah transaksi dikonfirmasi secara on-chain.",
    "All migration transactions can be verified on the": "Semua transaksi migrasi dapat diverifikasi di",
    "Cronos Explorer": "Penjelajah Cronos",
    "Secure & Audited": "Aman & Diaudit",
    "Xitcoin has been audited by": "Xitcoin telah diaudit oleh",
    "ensuring the integrity and security of the smart contract.": "memastikan integritas dan keamanan kontrak pintar.",
    "Fixed Supply": "Pasokan Tetap",
    "The Xitcoin contract is established at a maximum of": "Kontrak Xitcoin dibuat maksimal",
    ". No additional supply can ever be created.": ". Tidak ada pasokan tambahan yang dapat dibuat.",
    "Fully Transparent": "Sepenuhnya Transparan",
    "Every migration is recorded on-chain. Verify all transactions on the": "Setiap migrasi dicatat secara on-chain. Verifikasi semua transaksi di",
    "View Cyberscope Audit": "Lihat Audit Cyberscope",
    "Home": "Rumah",
    "Old Xitcoin Whitepaper": "Buku Putih Xitcoin Lama",
    "Xitcoin Whitepaper": "Buku Putih Xitcoin",
    "Migration": "Migrasi",
    "MAX": "MAKS",
    "Old Xitcoin": "Xitcoin lama",
    "Xitcoin": "Xitcoin",
    "Approving...": "Menyetujui...",
    "Migrating...": "Bermigrasi...",
    "Approve Old XTC And Migrate": "Setujui XTC Lama Dan Migrasi"
  },
  "ms": {
    "Connect Wallet": "Sambung Wallet",
    "Live Migration": "Migrasi Langsung",
    "Migration Old Xitcoin": "Migrasi Xitcoin Lama",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Pindahkan token Old Xitcoin (XTC) warisan anda dengan lancar kepada kontrak pintar Xitcoin (XTC) baharu yang dinaik taraf.",
    "One-Way": "Sehala",
    "You send": "awak hantar",
    "You receive": "awak terima",
    "Balance:": "Baki:",
    "This migration is": "Penghijrahan ini adalah",
    "irreversible": "tak boleh balik",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". XTC lama dihantar ke alamat mati yang ditetapkan. Anda menerima XTC selepas transaksi disahkan dalam rantaian.",
    "Migrate Old XTC → XTC": "Pindahkan XTC Lama → XTC",
    "Total legacy XTC sent": "Jumlah XTC warisan yang dihantar",
    "Legacy XTC sent to the designated dead address": "Legasi XTC dihantar ke alamat mati yang ditetapkan",
    "Migration Progress": "Kemajuan Migrasi",
    "of 21,000,000,000 XTC total supply": "daripada 21,000,000,000 XTC jumlah bekalan",
    "Migrate Your Old Xitcoin for Xitcoin": "Pindahkan Xitcoin Lama Anda untuk Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Penghijrahan Xitcoin (XTC) memastikan peralihan yang lancar daripada kontrak Old Xitcoin (XTC) warisan kepada kontrak pintar Xitcoin baharu yang dinaik taraf dibina di atas",
    "secure proxy architecture.": "seni bina proksi selamat.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Kontrak berasaskan proksi baharu membenarkan peningkatan masa depan yang sejajar dengan evolusi blockchain, tanpa menjejaskan pegangan token. Yang penting, kontrak proksi",
    "does not permit any increase in token supply": "tidak membenarkan sebarang peningkatan dalam bekalan token",
    "— it solely enables protocol improvements and compatibility updates over time.": "— ia hanya membolehkan penambahbaikan protokol dan kemas kini keserasian dari semasa ke semasa.",
    "The migration uses a": "Penghijrahan menggunakan a",
    "1:1 ratio": "nisbah 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— untuk setiap token XTC Lama yang dipindahkan, tepat 1 token XTC baharu diterima. Token XTC lama ialah",
    "sent": "dihantar",
    "to the designated": "kepada yang ditetapkan",
    "dead address": "alamat mati",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Token XTC baharu diterima hanya selepas transaksi disahkan dalam rantaian.",
    "All migration transactions can be verified on the": "Semua transaksi migrasi boleh disahkan pada",
    "Cronos Explorer": "Penjelajah Cronos",
    "Secure & Audited": "Selamat & Diaudit",
    "Xitcoin has been audited by": "Xitcoin telah diaudit oleh",
    "ensuring the integrity and security of the smart contract.": "memastikan integriti dan keselamatan kontrak pintar.",
    "Fixed Supply": "Bekalan Tetap",
    "The Xitcoin contract is established at a maximum of": "Kontrak Xitcoin ditubuhkan pada maksimum",
    ". No additional supply can ever be created.": ". Tiada bekalan tambahan boleh dibuat.",
    "Fully Transparent": "Telus Sepenuhnya",
    "Every migration is recorded on-chain. Verify all transactions on the": "Setiap migrasi direkodkan dalam rantaian. Sahkan semua transaksi pada",
    "View Cyberscope Audit": "Lihat Audit Cyberscope",
    "Home": "Rumah",
    "Old Xitcoin Whitepaper": "Kertas Putih Xitcoin Lama",
    "Xitcoin Whitepaper": "Kertas Putih Xitcoin",
    "Migration": "Penghijrahan",
    "MAX": "MAX",
    "Old Xitcoin": "Xitcoin lama",
    "Xitcoin": "Xitcoin",
    "Approving...": "Meluluskan...",
    "Migrating...": "Berhijrah...",
    "Approve Old XTC And Migrate": "Luluskan XTC Lama Dan Berhijrah"
  },
  "nl": {
    "Connect Wallet": "Verbind portemonnee",
    "Live Migration": "Live migratie",
    "Migration Old Xitcoin": "Migratie Oude Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Migreer uw oude Old Xitcoin (XTC)-tokens naadloos naar het nieuwe, geüpgradede Xitcoin (XTC) slimme contract.",
    "One-Way": "Enkele reis",
    "You send": "Jij stuurt",
    "You receive": "Jij ontvangt",
    "Balance:": "Evenwicht:",
    "This migration is": "Deze migratie is",
    "irreversible": "onomkeerbaar",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Oude XTC wordt naar het aangegeven dode adres gestuurd. Je ontvangt XTC nadat de transactie on-chain is bevestigd.",
    "Migrate Old XTC → XTC": "Migreer Oude XTC → XTC",
    "Total legacy XTC sent": "Totaal aantal oude XTC verzonden",
    "Legacy XTC sent to the designated dead address": "Legacy XTC verzonden naar het aangegeven dode adres",
    "Migration Progress": "Migratievooruitgang",
    "of 21,000,000,000 XTC total supply": "van het totale aanbod van 21.000.000.000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Migreer uw oude Xitcoin voor Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "De Xitcoin (XTC)-migratie zorgt voor een naadloze overgang van het oude Old Xitcoin (XTC)-contract naar het nieuwe, geüpgradede Xitcoin slimme contract, gebouwd op een",
    "secure proxy architecture.": "veilige proxy-architectuur.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Het nieuwe op proxy’s gebaseerde contract maakt toekomstige upgrades mogelijk die zijn afgestemd op de blockchain-evolutie, zonder ooit de tokenbezit in gevaar te brengen. Belangrijk is het proxycontract",
    "does not permit any increase in token supply": "staat geen enkele toename van het tokenaanbod toe",
    "— it solely enables protocol improvements and compatibility updates over time.": "— het maakt uitsluitend protocolverbeteringen en compatibiliteitsupdates in de loop van de tijd mogelijk.",
    "The migration uses a": "De migratie maakt gebruik van a",
    "1:1 ratio": "1:1 verhouding",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— voor elk gemigreerd oud XTC-token wordt precies 1 nieuw XTC-token ontvangen. Oude XTC-tokens wel",
    "sent": "verstuurd",
    "to the designated": "naar de aangewezen",
    "dead address": "dood adres",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Nieuwe XTC-tokens worden pas ontvangen nadat de transactie in de keten is bevestigd.",
    "All migration transactions can be verified on the": "Alle migratietransacties kunnen worden geverifieerd op de",
    "Cronos Explorer": "Cronos-verkenner",
    "Secure & Audited": "Veilig en gecontroleerd",
    "Xitcoin has been audited by": "Xitcoin is gecontroleerd door",
    "ensuring the integrity and security of the smart contract.": "het waarborgen van de integriteit en veiligheid van het slimme contract.",
    "Fixed Supply": "Vast aanbod",
    "The Xitcoin contract is established at a maximum of": "Het Xitcoin-contract wordt aangegaan op maximaal",
    ". No additional supply can ever be created.": ". Er kan nooit extra aanbod worden gecreëerd.",
    "Fully Transparent": "Volledig transparant",
    "Every migration is recorded on-chain. Verify all transactions on the": "Elke migratie wordt in de keten geregistreerd. Controleer alle transacties op de",
    "View Cyberscope Audit": "Bekijk Cyberscope-audit",
    "Home": "Thuis",
    "Old Xitcoin Whitepaper": "Oud Xitcoin-witboek",
    "Xitcoin Whitepaper": "Xitcoin-witboek",
    "Migration": "Migratie",
    "MAX": "MAX",
    "Old Xitcoin": "Oude Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Goedkeuren...",
    "Migrating...": "Migreren...",
    "Approve Old XTC And Migrate": "Oude XTC goedkeuren en migreren"
  },
  "pl": {
    "Connect Wallet": "Połącz portfel",
    "Live Migration": "Migracja na żywo",
    "Migration Old Xitcoin": "Migracja starego Xitcoina",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Bezproblemowo migruj swoje starsze tokeny Old Xitcoin (XTC) do nowego, ulepszonego inteligentnego kontraktu Xitcoin (XTC).",
    "One-Way": "Jednokierunkowy",
    "You send": "Wysyłasz",
    "You receive": "Otrzymujesz",
    "Balance:": "Balansować:",
    "This migration is": "Ta migracja jest",
    "irreversible": "nieodwracalny",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Stary XTC jest wysyłany na wyznaczony martwy adres. Otrzymasz XTC po potwierdzeniu transakcji w łańcuchu.",
    "Migrate Old XTC → XTC": "Przeprowadź migrację starego XTC → XTC",
    "Total legacy XTC sent": "Wysłano łącznie starsze XTC",
    "Legacy XTC sent to the designated dead address": "Starsza wersja XTC wysłana na wyznaczony martwy adres",
    "Migration Progress": "Postęp migracji",
    "of 21,000,000,000 XTC total supply": "całkowitej podaży 21 000 000 000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Przenieś swój stary Xitcoin na Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Migracja Xitcoin (XTC) zapewnia płynne przejście ze starszego kontraktu Old Xitcoin (XTC) do nowego, ulepszonego inteligentnego kontraktu Xitcoin zbudowanego na",
    "secure proxy architecture.": "bezpieczna architektura proxy.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Nowa umowa oparta na proxy umożliwia przyszłe aktualizacje dostosowane do ewolucji blockchain, bez uszczerbku dla zasobów tokenów. Co ważne, umowa o pełnomocnictwo",
    "does not permit any increase in token supply": "nie pozwala na zwiększenie podaży tokenów",
    "— it solely enables protocol improvements and compatibility updates over time.": "— umożliwia wyłącznie ulepszenia protokołu i aktualizacje kompatybilności w miarę upływu czasu.",
    "The migration uses a": "Migracja wykorzystuje a",
    "1:1 ratio": "Stosunek 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— za każdy migrowany stary token XTC otrzymywany jest dokładnie 1 nowy token XTC. Stare tokeny XTC są",
    "sent": "wysłano",
    "to the designated": "do wyznaczonego",
    "dead address": "martwy adres",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Nowe tokeny XTC są odbierane dopiero po potwierdzeniu transakcji w łańcuchu.",
    "All migration transactions can be verified on the": "Wszystkie transakcje migracji można zweryfikować na stronie",
    "Cronos Explorer": "Odkrywca Kronosa",
    "Secure & Audited": "Bezpieczne i kontrolowane",
    "Xitcoin has been audited by": "Xitcoin został poddany audytowi przez",
    "ensuring the integrity and security of the smart contract.": "zapewnienie integralności i bezpieczeństwa inteligentnej umowy.",
    "Fixed Supply": "Stała dostawa",
    "The Xitcoin contract is established at a maximum of": "Kontrakt Xitcoin jest ustalany na maksymalnie",
    ". No additional supply can ever be created.": ". Nie można nigdy stworzyć dodatkowej podaży.",
    "Fully Transparent": "W pełni przezroczysty",
    "Every migration is recorded on-chain. Verify all transactions on the": "Każda migracja jest rejestrowana w łańcuchu. Sprawdź wszystkie transakcje na",
    "View Cyberscope Audit": "Obejrzyj Audyt Cyberskopu",
    "Home": "Dom",
    "Old Xitcoin Whitepaper": "Stara księga Xitcoina",
    "Xitcoin Whitepaper": "Oficjalna księga Xitcoina",
    "Migration": "Emigracja",
    "MAX": "MAKS",
    "Old Xitcoin": "Stary Xitcoin",
    "Xitcoin": "Xitcoina",
    "Approving...": "Pochlebny...",
    "Migrating...": "Migracja...",
    "Approve Old XTC And Migrate": "Zatwierdź stary XTC i przeprowadź migrację"
  }
}

Object.assign(locales, {
  "fa": {
    "label": "🇮🇷 FA",
    "language": "fa",
    "direction": "rtl",
    "reference": "ترجمه ها برای راحتی ارائه شده است. در صورت مغایرت، نسخه انگلیسی مرجع است."
  },
  "fil": {
    "label": "🇵🇭 FIL",
    "language": "fil",
    "direction": "ltr",
    "reference": "Ang mga pagsasalin ay ibinigay para sa kaginhawahan. Sa kaso ng pagkakaiba, ang Ingles na bersyon ang sanggunian."
  },
  "he": {
    "label": "🇮🇱 HE",
    "language": "he",
    "direction": "rtl",
    "reference": "תרגומים מסופקים מטעמי נוחות. במקרה של אי התאמה, הגרסה האנגלית היא ההפניה."
  },
  "hi": {
    "label": "🇮🇳 HI",
    "language": "hi",
    "direction": "ltr",
    "reference": "सुविधा के लिए अनुवाद उपलब्ध कराये गये हैं। विसंगति के मामले में, अंग्रेजी संस्करण संदर्भ है।"
  },
  "id": {
    "label": "🇮🇩 ID",
    "language": "id",
    "direction": "ltr",
    "reference": "Terjemahan disediakan untuk kenyamanan. Jika ada perbedaan, versi bahasa Inggris adalah referensinya."
  },
  "ms": {
    "label": "🇲🇾 MS",
    "language": "ms",
    "direction": "ltr",
    "reference": "Terjemahan disediakan untuk kemudahan. Sekiranya terdapat percanggahan, versi bahasa Inggeris adalah rujukan."
  },
  "nl": {
    "label": "🇳🇱 NL",
    "language": "nl",
    "direction": "ltr",
    "reference": "Voor het gemak zijn er vertalingen beschikbaar. In geval van discrepantie is de Engelse versie de referentie."
  },
  "pl": {
    "label": "🇵🇱 PL",
    "language": "pl",
    "direction": "ltr",
    "reference": "Dla wygody zapewniono tłumaczenia. W przypadku rozbieżności, wersją odniesienia jest wersja angielska."
  }
})
Object.assign(translations, GeneratedBatchTwo)

const GeneratedBatchThree = {
  "ro": {
    "Connect Wallet": "Connect Wallet",
    "Live Migration": "Migrație în direct",
    "Migration Old Xitcoin": "Migrație Xitcoin vechi",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Migrați fără probleme token-urile vechi Xitcoin (XTC) către noul contract inteligent Xitcoin (XTC) actualizat.",
    "One-Way": "Sens unic",
    "You send": "Tu trimiți",
    "You receive": "Primești",
    "Balance:": "Echilibru:",
    "This migration is": "Această migrare este",
    "irreversible": "ireversibil",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Vechiul XTC este trimis la adresa moartă desemnată. Primești XTC după ce tranzacția este confirmată în lanț.",
    "Migrate Old XTC → XTC": "Migrați vechiul XTC → XTC",
    "Total legacy XTC sent": "Total XTC moștenit trimis",
    "Legacy XTC sent to the designated dead address": "Legacy XTC trimis la adresa moartă desemnată",
    "Migration Progress": "Progresul migrației",
    "of 21,000,000,000 XTC total supply": "de 21.000.000.000 XTC aprovizionare totală",
    "Migrate Your Old Xitcoin for Xitcoin": "Migrați-vă vechiul Xitcoin pentru Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Migrarea Xitcoin (XTC) asigură o tranziție fără probleme de la vechiul contract Old Xitcoin (XTC) la noul contract inteligent Xitcoin actualizat, construit pe o",
    "secure proxy architecture.": "arhitectură proxy securizată.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Noul contract bazat pe proxy permite upgrade-uri viitoare aliniate cu evoluția blockchain, fără a compromite vreodată deținerile de token-uri. Important este contractul de procură",
    "does not permit any increase in token supply": "nu permite nicio creștere a ofertei de jetoane",
    "— it solely enables protocol improvements and compatibility updates over time.": "— permite numai îmbunătățiri ale protocolului și actualizări de compatibilitate în timp.",
    "The migration uses a": "Migrarea folosește a",
    "1:1 ratio": "Raport 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— pentru fiecare token XTC vechi migrat, este primit exact 1 jeton XTC nou. Vechile jetoane XTC sunt",
    "sent": "trimis",
    "to the designated": "către cel desemnat",
    "dead address": "adresa moartă",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Noile jetoane XTC sunt primite numai după ce tranzacția este confirmată în lanț.",
    "All migration transactions can be verified on the": "Toate tranzacțiile de migrare pot fi verificate pe",
    "Cronos Explorer": "Cronos Explorer",
    "Secure & Audited": "Securizat și auditat",
    "Xitcoin has been audited by": "Xitcoin a fost auditat de",
    "ensuring the integrity and security of the smart contract.": "asigurarea integrității și securității contractului inteligent.",
    "Fixed Supply": "Aprovizionare fixă",
    "The Xitcoin contract is established at a maximum of": "Contractul Xitcoin este stabilit la maximum",
    ". No additional supply can ever be created.": ". Nicio aprovizionare suplimentară nu poate fi creată vreodată.",
    "Fully Transparent": "Complet transparent",
    "Every migration is recorded on-chain. Verify all transactions on the": "Fiecare migrare este înregistrată în lanț. Verificați toate tranzacțiile pe",
    "View Cyberscope Audit": "Vizualizați auditul Cyberscope",
    "Home": "Acasă",
    "Old Xitcoin Whitepaper": "Vechea carte albă Xitcoin",
    "Xitcoin Whitepaper": "Cartea albă Xitcoin",
    "Migration": "Migrația",
    "MAX": "MAX",
    "Old Xitcoin": "Xitcoin vechi",
    "Xitcoin": "Xitcoin",
    "Approving...": "Se aprobă...",
    "Migrating...": "Se migrează...",
    "Approve Old XTC And Migrate": "Aprobați vechiul XTC și migrați"
  },
  "sv": {
    "Connect Wallet": "Anslut plånbok",
    "Live Migration": "Live migration",
    "Migration Old Xitcoin": "Migration Gamla Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Migrera sömlöst dina gamla gamla Xitcoin (XTC) tokens till det nya, uppgraderade Xitcoin (XTC) smarta kontraktet.",
    "One-Way": "Envägs",
    "You send": "Du skickar",
    "You receive": "Du tar emot",
    "Balance:": "Saldo:",
    "This migration is": "Denna migration är",
    "irreversible": "irreversibel",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Gamla XTC skickas till den angivna döda adressen. Du får XTC efter att transaktionen har bekräftats i kedjan.",
    "Migrate Old XTC → XTC": "Migrera gamla XTC → XTC",
    "Total legacy XTC sent": "Totalt äldre XTC har skickats",
    "Legacy XTC sent to the designated dead address": "Legacy XTC skickas till den angivna döda adressen",
    "Migration Progress": "Migrationsframsteg",
    "of 21,000,000,000 XTC total supply": "av 21 000 000 000 XTC totalt utbud",
    "Migrate Your Old Xitcoin for Xitcoin": "Migrera din gamla Xitcoin för Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Xitcoin (XTC)-migreringen säkerställer en sömlös övergång från det äldre kontraktet Old Xitcoin (XTC) till det nya, uppgraderade Xitcoin smarta kontraktet byggt på ett",
    "secure proxy architecture.": "säker proxyarkitektur.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Det nya proxybaserade kontraktet möjliggör framtida uppgraderingar i linje med blockchain-utvecklingen, utan att någonsin kompromissa med tokeninnehav. Viktigt, fullmaktsavtalet",
    "does not permit any increase in token supply": "tillåter inte någon ökning av tokentillgången",
    "— it solely enables protocol improvements and compatibility updates over time.": "— det möjliggör endast protokollförbättringar och kompatibilitetsuppdateringar över tid.",
    "The migration uses a": "Migreringen använder en",
    "1:1 ratio": "1:1 förhållande",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— för varje gammal XTC-token som migreras, tas exakt 1 ny XTC-token emot. Gamla XTC-tokens är",
    "sent": "skickas",
    "to the designated": "till den utsedda",
    "dead address": "död adress",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Nya XTC-tokens tas emot först efter att transaktionen har bekräftats i kedjan.",
    "All migration transactions can be verified on the": "Alla migreringstransaktioner kan verifieras på",
    "Cronos Explorer": "Cronos Explorer",
    "Secure & Audited": "Säker och granskad",
    "Xitcoin has been audited by": "Xitcoin har granskats av",
    "ensuring the integrity and security of the smart contract.": "säkerställa integriteten och säkerheten för det smarta kontraktet.",
    "Fixed Supply": "Fast leverans",
    "The Xitcoin contract is established at a maximum of": "Xitcoin-kontraktet är etablerat till maximalt",
    ". No additional supply can ever be created.": ". Ingen ytterligare försörjning kan någonsin skapas.",
    "Fully Transparent": "Helt transparent",
    "Every migration is recorded on-chain. Verify all transactions on the": "Varje migrering registreras i kedjan. Verifiera alla transaktioner på",
    "View Cyberscope Audit": "Se Cyberscope Audit",
    "Home": "Hem",
    "Old Xitcoin Whitepaper": "Gamla Xitcoin Whitepaper",
    "Xitcoin Whitepaper": "Xitcoin Whitepaper",
    "Migration": "Migration",
    "MAX": "MAX",
    "Old Xitcoin": "Gamla Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Godkänner...",
    "Migrating...": "Migrerar...",
    "Approve Old XTC And Migrate": "Godkänn gamla XTC och migrera"
  },
  "th": {
    "Connect Wallet": "เชื่อมต่อกระเป๋าเงิน",
    "Live Migration": "การโยกย้ายสด",
    "Migration Old Xitcoin": "การโยกย้าย Xitcoin เก่า",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "ย้ายโทเค็น Xitcoin (XTC) เก่าของคุณไปยังสัญญาอัจฉริยะ Xitcoin (XTC) ใหม่ที่ได้รับการอัปเกรดได้อย่างราบรื่น",
    "One-Way": "เที่ยวเดียว",
    "You send": "คุณส่ง",
    "You receive": "คุณได้รับ",
    "Balance:": "สมดุล:",
    "This migration is": "การโยกย้ายครั้งนี้คือ",
    "irreversible": "กลับไม่ได้",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". XTC เก่าจะถูกส่งไปยังที่อยู่ที่ตายแล้วที่กำหนด คุณได้รับ XTC หลังจากธุรกรรมได้รับการยืนยันทางออนไลน์",
    "Migrate Old XTC → XTC": "ย้าย XTC เก่า → XTC",
    "Total legacy XTC sent": "ส่ง XTC ดั้งเดิมทั้งหมดแล้ว",
    "Legacy XTC sent to the designated dead address": "XTC ดั้งเดิมส่งไปยังที่อยู่ที่ตายแล้วที่กำหนด",
    "Migration Progress": "ความคืบหน้าการย้ายถิ่นฐาน",
    "of 21,000,000,000 XTC total supply": "จำนวนอุปทานทั้งหมด 21,000,000,000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "ย้าย Xitcoin เก่าของคุณสำหรับ Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "การโยกย้าย Xitcoin (XTC) ช่วยให้มั่นใจได้ถึงการเปลี่ยนแปลงที่ราบรื่นจากสัญญา Xitcoin เก่า (XTC) แบบเดิมไปเป็นสัญญาอัจฉริยะ Xitcoin ใหม่ที่อัปเกรดแล้วซึ่งสร้างขึ้นบน",
    "secure proxy architecture.": "สถาปัตยกรรมพร็อกซีที่ปลอดภัย",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "สัญญาที่ใช้พร็อกซีฉบับใหม่ช่วยให้สามารถอัพเกรดได้ในอนาคตซึ่งสอดคล้องกับวิวัฒนาการของบล็อกเชน โดยไม่กระทบต่อการถือครองโทเค็น ที่สำคัญสัญญามอบฉันทะ",
    "does not permit any increase in token supply": "ไม่อนุญาตให้มีการเพิ่มอุปทานโทเค็นใดๆ",
    "— it solely enables protocol improvements and compatibility updates over time.": "— ช่วยให้สามารถปรับปรุงโปรโตคอลและอัปเดตความเข้ากันได้เมื่อเวลาผ่านไปเท่านั้น",
    "The migration uses a": "การโยกย้ายใช้",
    "1:1 ratio": "อัตราส่วน 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— สำหรับทุกโทเค็น XTC เก่าที่ถูกย้าย จะได้รับโทเค็น XTC ใหม่ 1 อัน โทเค็น XTC เก่าคือ",
    "sent": "ส่งแล้ว",
    "to the designated": "ไปยังผู้ที่ได้รับมอบหมาย",
    "dead address": "ที่อยู่ที่ตายแล้ว",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". โทเค็น XTC ใหม่จะได้รับหลังจากการทำธุรกรรมได้รับการยืนยันทางออนไลน์เท่านั้น",
    "All migration transactions can be verified on the": "ธุรกรรมการโยกย้ายทั้งหมดสามารถตรวจสอบได้ที่",
    "Cronos Explorer": "โครนอส เอกซ์พลอเรอร์",
    "Secure & Audited": "ปลอดภัยและตรวจสอบแล้ว",
    "Xitcoin has been audited by": "Xitcoin ได้รับการตรวจสอบโดย",
    "ensuring the integrity and security of the smart contract.": "สร้างความมั่นใจในความสมบูรณ์และความปลอดภัยของสัญญาอัจฉริยะ",
    "Fixed Supply": "อุปทานคงที่",
    "The Xitcoin contract is established at a maximum of": "สัญญา Xitcoin ได้รับการจัดตั้งขึ้นสูงสุดที่",
    ". No additional supply can ever be created.": ". ไม่สามารถสร้างอุปทานเพิ่มเติมได้",
    "Fully Transparent": "โปร่งใสอย่างเต็มที่",
    "Every migration is recorded on-chain. Verify all transactions on the": "ทุกการโยกย้ายจะถูกบันทึกแบบออนไลน์ ตรวจสอบการทำธุรกรรมทั้งหมดบน",
    "View Cyberscope Audit": "ดูการตรวจสอบ Cyberscope",
    "Home": "บ้าน",
    "Old Xitcoin Whitepaper": "เอกสารไวท์เปเปอร์ Xitcoin เก่า",
    "Xitcoin Whitepaper": "เอกสารไวท์เปเปอร์ Xitcoin",
    "Migration": "การโยกย้าย",
    "MAX": "สูงสุด",
    "Old Xitcoin": "Xitcoin เก่า",
    "Xitcoin": "ซิตคอยน์",
    "Approving...": "กำลังอนุมัติ...",
    "Migrating...": "กำลังย้ายข้อมูล...",
    "Approve Old XTC And Migrate": "อนุมัติ XTC เก่าและย้ายข้อมูล"
  },
  "uk": {
    "Connect Wallet": "Підключити гаманець",
    "Live Migration": "Жива міграція",
    "Migration Old Xitcoin": "Міграція старого Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Плавно перенесіть свої застарілі токени Xitcoin (XTC) на новий оновлений смарт-контракт Xitcoin (XTC).",
    "One-Way": "Односторонній",
    "You send": "Ви надсилаєте",
    "You receive": "Ви отримуєте",
    "Balance:": "Баланс:",
    "This migration is": "Ця міграція є",
    "irreversible": "незворотній",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". Старий XTC надсилається на вказану мертву адресу. Ви отримуєте XTC після підтвердження транзакції в мережі.",
    "Migrate Old XTC → XTC": "Перенести старий XTC → XTC",
    "Total legacy XTC sent": "Усі надіслані застарілі XTC",
    "Legacy XTC sent to the designated dead address": "Застарілий XTC надіслано на вказану мертву адресу",
    "Migration Progress": "Прогрес міграції",
    "of 21,000,000,000 XTC total supply": "із загальної пропозиції 21 000 000 000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Перенесіть свій старий Xitcoin на Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Міграція Xitcoin (XTC) забезпечує плавний перехід від застарілого контракту Old Xitcoin (XTC) до нового оновленого смарт-контракту Xitcoin, побудованого на",
    "secure proxy architecture.": "безпечна архітектура проксі.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Новий контракт на основі проксі-сервера передбачає майбутні оновлення відповідно до еволюції блокчейну без шкоди для токенів. Важливо, договір доручення",
    "does not permit any increase in token supply": "не допускає будь-якого збільшення пропозиції токенів",
    "— it solely enables protocol improvements and compatibility updates over time.": "— він лише забезпечує вдосконалення протоколу та оновлення сумісності з часом.",
    "The migration uses a": "Міграція використовує a",
    "1:1 ratio": "Співвідношення 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— за кожен перенесений старий токен XTC отримується рівно 1 новий токен XTC. Старі токени XTC є",
    "sent": "надіслано",
    "to the designated": "до призначеного",
    "dead address": "мертва адреса",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Нові токени XTC надходять лише після підтвердження транзакції в мережі.",
    "All migration transactions can be verified on the": "Усі транзакції міграції можна перевірити на",
    "Cronos Explorer": "Cronos Explorer",
    "Secure & Audited": "Безпека та перевірка",
    "Xitcoin has been audited by": "Xitcoin пройшов аудит",
    "ensuring the integrity and security of the smart contract.": "забезпечення цілісності та безпеки смарт-контракту.",
    "Fixed Supply": "Стаціонарне постачання",
    "The Xitcoin contract is established at a maximum of": "Контракт Xitcoin встановлено на максимум",
    ". No additional supply can ever be created.": ". Жодна додаткова поставка ніколи не може бути створена.",
    "Fully Transparent": "Повністю прозорий",
    "Every migration is recorded on-chain. Verify all transactions on the": "Кожна міграція записується в мережі. Перевірте всі транзакції на",
    "View Cyberscope Audit": "Переглянути Cyberscope Audit",
    "Home": "додому",
    "Old Xitcoin Whitepaper": "Старий документ Xitcoin",
    "Xitcoin Whitepaper": "Біла книга Xitcoin",
    "Migration": "Міграція",
    "MAX": "МАКС",
    "Old Xitcoin": "Старий Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "Схвалення...",
    "Migrating...": "Міграція...",
    "Approve Old XTC And Migrate": "Підтвердьте старий XTC і перейдіть"
  },
  "ur": {
    "Connect Wallet": "والیٹ کو جوڑیں۔",
    "Live Migration": "لائیو ہجرت",
    "Migration Old Xitcoin": "ہجرت پرانا Xitcoin",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "بغیر کسی رکاوٹ کے اپنے پرانے Xitcoin (XTC) ٹوکنز کو نئے، اپ گریڈ شدہ Xitcoin (XTC) سمارٹ کنٹریکٹ پر منتقل کریں۔",
    "One-Way": "یک طرفہ",
    "You send": "آپ بھیج دیں۔",
    "You receive": "آپ وصول کرتے ہیں۔",
    "Balance:": "توازن:",
    "This migration is": "یہ ہجرت ہے۔",
    "irreversible": "ناقابل واپسی",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". پرانا XTC نامزد مردہ پتے پر بھیجا جاتا ہے۔ آن چین ٹرانزیکشن کی تصدیق ہونے کے بعد آپ کو XTC موصول ہوتا ہے۔",
    "Migrate Old XTC → XTC": "پرانا XTC → XTC منتقل کریں۔",
    "Total legacy XTC sent": "کل میراث XTC بھیجی گئی۔",
    "Legacy XTC sent to the designated dead address": "Legacy XTC نامزد مردہ پتے پر بھیجا گیا۔",
    "Migration Progress": "ہجرت کی پیشرفت",
    "of 21,000,000,000 XTC total supply": "21,000,000,000 XTC کل سپلائی",
    "Migrate Your Old Xitcoin for Xitcoin": "Xitcoin کے لیے اپنے پرانے Xitcoin کو منتقل کریں۔",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Xitcoin (XTC) کی منتقلی میراثی اولڈ Xitcoin (XTC) معاہدے سے نئے، اپ گریڈ شدہ Xitcoin سمارٹ کنٹریکٹ پر بغیر کسی رکاوٹ کی منتقلی کو یقینی بناتی ہے۔",
    "secure proxy architecture.": "محفوظ پراکسی فن تعمیر۔",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "نیا پراکسی پر مبنی معاہدہ بلاکچین ارتقاء کے ساتھ منسلک مستقبل کے اپ گریڈز کی اجازت دیتا ہے، بغیر کسی ٹوکن ہولڈنگز پر سمجھوتہ کئے۔ اہم بات یہ ہے کہ پراکسی معاہدہ",
    "does not permit any increase in token supply": "ٹوکن کی فراہمی میں اضافے کی اجازت نہیں دیتا",
    "— it solely enables protocol improvements and compatibility updates over time.": "- یہ صرف وقت کے ساتھ پروٹوکول میں بہتری اور مطابقت کی تازہ کاریوں کو قابل بناتا ہے۔",
    "The migration uses a": "ہجرت a کا استعمال کرتی ہے۔",
    "1:1 ratio": "1:1 تناسب",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— منتقل ہونے والے ہر پرانے XTC ٹوکن کے لیے، بالکل 1 نیا XTC ٹوکن موصول ہوتا ہے۔ پرانے XTC ٹوکن ہیں۔",
    "sent": "بھیجا",
    "to the designated": "نامزد کرنے کے لئے",
    "dead address": "مردہ پتہ",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". نئے XTC ٹوکنز لین دین کی تصدیق کے بعد ہی موصول ہوتے ہیں۔",
    "All migration transactions can be verified on the": "منتقلی کے تمام لین دین کی تصدیق کی جا سکتی ہے۔",
    "Cronos Explorer": "کرونس ایکسپلورر",
    "Secure & Audited": "محفوظ اور آڈٹ",
    "Xitcoin has been audited by": "Xitcoin کی طرف سے آڈٹ کیا گیا ہے",
    "ensuring the integrity and security of the smart contract.": "سمارٹ معاہدے کی سالمیت اور سلامتی کو یقینی بنانا۔",
    "Fixed Supply": "فکسڈ سپلائی",
    "The Xitcoin contract is established at a maximum of": "Xitcoin معاہدہ زیادہ سے زیادہ پر قائم کیا جاتا ہے",
    ". No additional supply can ever be created.": ". کوئی اضافی سپلائی کبھی پیدا نہیں ہو سکتی۔",
    "Fully Transparent": "مکمل شفاف",
    "Every migration is recorded on-chain. Verify all transactions on the": "ہر نقل مکانی کو آن چین ریکارڈ کیا جاتا ہے۔ پر تمام لین دین کی تصدیق کریں۔",
    "View Cyberscope Audit": "سائبر سکوپ آڈٹ دیکھیں",
    "Home": "گھر",
    "Old Xitcoin Whitepaper": "پرانا Xitcoin وائٹ پیپر",
    "Xitcoin Whitepaper": "Xitcoin وائٹ پیپر",
    "Migration": "ہجرت",
    "MAX": "MAX",
    "Old Xitcoin": "پرانا Xitcoin",
    "Xitcoin": "Xitcoin",
    "Approving...": "منظور کر رہا ہے...",
    "Migrating...": "منتقلی...",
    "Approve Old XTC And Migrate": "پرانے XTC کو منظور کریں اور ہجرت کریں۔"
  },
  "vi": {
    "Connect Wallet": "Kết nối ví",
    "Live Migration": "Di chuyển trực tiếp",
    "Migration Old Xitcoin": "Di chuyển Xitcoin cũ",
    "Seamlessly migrate your legacy Old Xitcoin (XTC) tokens to the new, upgraded Xitcoin (XTC) smart contract.": "Di chuyển liền mạch mã thông báo Xitcoin (XTC) cũ của bạn sang hợp đồng thông minh Xitcoin (XTC) mới, được nâng cấp.",
    "One-Way": "Một chiều",
    "You send": "Bạn gửi",
    "You receive": "Bạn nhận được",
    "Balance:": "Sự cân bằng:",
    "This migration is": "Sự di cư này",
    "irreversible": "không thể đảo ngược",
    ". Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.": ". XTC cũ được gửi đến địa chỉ chết được chỉ định. Bạn nhận được XTC sau khi giao dịch được xác nhận trên chuỗi.",
    "Migrate Old XTC → XTC": "Di chuyển XTC cũ → XTC",
    "Total legacy XTC sent": "Tổng số XTC cũ đã được gửi",
    "Legacy XTC sent to the designated dead address": "XTC kế thừa được gửi đến địa chỉ chết được chỉ định",
    "Migration Progress": "Tiến trình di chuyển",
    "of 21,000,000,000 XTC total supply": "tổng nguồn cung là 21.000.000.000 XTC",
    "Migrate Your Old Xitcoin for Xitcoin": "Di chuyển Xitcoin cũ của bạn sang Xitcoin",
    "The Xitcoin (XTC) migration ensures a seamless transition from the legacy Old Xitcoin (XTC) contract to the new, upgraded Xitcoin smart contract built on a": "Việc di chuyển Xitcoin (XTC) đảm bảo sự chuyển đổi liền mạch từ hợp đồng Xitcoin cũ (XTC) sang hợp đồng thông minh Xitcoin mới, được nâng cấp được xây dựng trên nền tảng",
    "secure proxy architecture.": "kiến trúc proxy an toàn.",
    "The new proxy-based contract allows for future upgrades aligned with blockchain evolution, without ever compromising token holdings. Importantly, the proxy contract": "Hợp đồng dựa trên proxy mới cho phép nâng cấp trong tương lai phù hợp với sự phát triển của blockchain mà không ảnh hưởng đến việc nắm giữ mã thông báo. Điều quan trọng là hợp đồng ủy quyền",
    "does not permit any increase in token supply": "không cho phép tăng nguồn cung cấp token",
    "— it solely enables protocol improvements and compatibility updates over time.": "— nó chỉ cho phép cải tiến giao thức và cập nhật khả năng tương thích theo thời gian.",
    "The migration uses a": "Việc di chuyển sử dụng một",
    "1:1 ratio": "tỷ lệ 1:1",
    "— for every Old XTC token migrated, exactly 1 new XTC token is received. Old XTC tokens are": "— đối với mỗi mã thông báo XTC cũ được di chuyển, sẽ nhận được chính xác 1 mã thông báo XTC mới. Mã thông báo XTC cũ là",
    "sent": "đã gửi",
    "to the designated": "đến nơi được chỉ định",
    "dead address": "địa chỉ chết",
    ". New XTC tokens are received only after the transaction is confirmed on-chain.": ". Mã thông báo XTC mới chỉ được nhận sau khi giao dịch được xác nhận trực tuyến.",
    "All migration transactions can be verified on the": "Tất cả các giao dịch di chuyển có thể được xác minh trên",
    "Cronos Explorer": "Nhà thám hiểm Cronos",
    "Secure & Audited": "An toàn & đã được kiểm toán",
    "Xitcoin has been audited by": "Xitcoin đã được kiểm toán bởi",
    "ensuring the integrity and security of the smart contract.": "đảm bảo tính toàn vẹn và bảo mật của hợp đồng thông minh.",
    "Fixed Supply": "Nguồn cung cố định",
    "The Xitcoin contract is established at a maximum of": "Hợp đồng Xitcoin được thiết lập tối đa",
    ". No additional supply can ever be created.": ". Không có nguồn cung cấp bổ sung nào có thể được tạo ra.",
    "Fully Transparent": "Hoàn toàn minh bạch",
    "Every migration is recorded on-chain. Verify all transactions on the": "Mọi di chuyển đều được ghi lại trên chuỗi. Xác minh tất cả các giao dịch trên",
    "View Cyberscope Audit": "Xem Kiểm tra Cyberscope",
    "Home": "Trang chủ",
    "Old Xitcoin Whitepaper": "Sách trắng Xitcoin cũ",
    "Xitcoin Whitepaper": "Sách trắng Xitcoin",
    "Migration": "Di chuyển",
    "MAX": "TỐI ĐA",
    "Old Xitcoin": "Xitcoin cũ",
    "Xitcoin": "Xitcoin",
    "Approving...": "Đang phê duyệt...",
    "Migrating...": "Đang di chuyển...",
    "Approve Old XTC And Migrate": "Phê duyệt XTC cũ và di chuyển"
  }
}

Object.assign(locales, {
  "ro": {
    "label": "🇷🇴 RO",
    "language": "ro",
    "direction": "ltr",
    "reference": "Pentru comoditate, sunt oferite traduceri. În caz de discrepanță, versiunea în limba engleză este referința."
  },
  "sv": {
    "label": "🇸🇪 SV",
    "language": "sv",
    "direction": "ltr",
    "reference": "Översättningar tillhandahålls för bekvämlighet. Vid diskrepans är den engelska versionen referens."
  },
  "th": {
    "label": "🇹🇭 TH",
    "language": "th",
    "direction": "ltr",
    "reference": "มีการแปลเพื่อความสะดวก ในกรณีที่มีความคลาดเคลื่อน ฉบับภาษาอังกฤษจะเป็นข้อมูลอ้างอิง"
  },
  "uk": {
    "label": "🇺🇦 UK",
    "language": "uk",
    "direction": "ltr",
    "reference": "Для зручності надаються переклади. У разі невідповідності посиланням є англійська версія."
  },
  "ur": {
    "label": "🇵🇰 UR",
    "language": "ur",
    "direction": "rtl",
    "reference": "ترجمے سہولت کے لیے فراہم کیے گئے ہیں۔ اختلاف کی صورت میں انگریزی ورژن حوالہ ہے۔"
  },
  "vi": {
    "label": "🇻🇳 VI",
    "language": "vi",
    "direction": "ltr",
    "reference": "Các bản dịch được cung cấp để thuận tiện. Trong trường hợp có sự khác biệt, phiên bản tiếng Anh là tài liệu tham khảo."
  }
})
Object.assign(translations, GeneratedBatchThree)

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
  style.textContent = `#xitcoin-language-group{display:flex;align-items:center;gap:8px;flex:0 0 auto;white-space:nowrap}#xitcoin-language{max-width:116px}#xitcoin-mobile-menu-toggle,#xitcoin-mobile-menu-drawer,#xitcoin-mobile-menu-overlay{display:none}@media(max-width:960px){header{position:relative!important;overflow:visible!important}header [data-xitcoin-logo]{display:flex;min-width:0;max-width:calc(100vw - 78px);overflow:hidden;white-space:nowrap}header [data-xitcoin-mobile-navlink]{display:none!important}#xitcoin-mobile-menu-toggle{display:inline-flex;position:absolute;top:50%;right:14px;z-index:10001;align-items:center;justify-content:center;width:42px;height:42px;transform:translateY(-50%);border:0;border-radius:8px;background:transparent;color:#f5f5f5;font:700 22px/1 system-ui;cursor:pointer;box-shadow:none!important;outline:none}#xitcoin-mobile-menu-overlay{position:fixed;inset:0;z-index:10010;background:rgba(0,0,0,.58)}#xitcoin-mobile-menu-drawer{display:block;position:fixed;top:0;right:0;bottom:0;z-index:10011;width:min(86vw,340px);padding:84px 20px 28px;overflow-y:auto;border-left:1px solid rgba(255,255,255,.14);background:#0b0b10;box-shadow:-20px 0 50px rgba(0,0,0,.45);transform:translateX(105%);transition:transform .22s ease}#xitcoin-mobile-menu-close{position:absolute;top:16px;right:16px;width:40px;height:40px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#15151b;color:#fff;font:400 28px/1 system-ui;cursor:pointer;box-shadow:none!important;outline:none}#xitcoin-mobile-menu-drawer.is-open{transform:translateX(0)}#xitcoin-mobile-menu-overlay.is-open{display:block}#xitcoin-mobile-menu-links{display:grid;gap:8px;margin-bottom:24px}#xitcoin-mobile-menu-links a{display:block;padding:13px 0;border-bottom:1px solid rgba(255,255,255,.1);color:#fff;text-decoration:none;font:700 15px/1.3 system-ui}#xitcoin-mobile-menu-links a[data-xitcoin-buy-link]{margin-top:8px;padding:14px 16px;border:1px solid rgba(251,141,0,.72);border-radius:12px;background:rgba(251,141,0,.08);color:#ffad33}#xitcoin-mobile-menu-drawer #xitcoin-language-group{display:grid;grid-template-columns:1fr;width:100%;gap:10px}#xitcoin-mobile-menu-drawer #xitcoin-language{width:100%;max-width:none;height:44px}#xitcoin-mobile-menu-drawer #xitcoin-language-group button{width:100%;min-height:46px;white-space:nowrap}}`
  document.head.append(style)
}

function setupMobileNavigation() {
  const header = document.querySelector('header')
  const group = document.getElementById('xitcoin-language')
    ?.closest('#xitcoin-language-group')

  if (!header || !group || document.getElementById('xitcoin-mobile-menu-toggle')) return

  const links = [...header.querySelectorAll('a')]
  const [logo, ...navigationLinks] = links
  if (!logo) return

  logo.setAttribute('data-xitcoin-logo', '')
  for (const link of navigationLinks) link.setAttribute('data-xitcoin-mobile-navlink', '')

  const groupHome = group.parentElement
  const groupNextSibling = group.nextSibling

  const toggle = document.createElement('button')
  toggle.id = 'xitcoin-mobile-menu-toggle'
  toggle.type = 'button'
  toggle.setAttribute('aria-label', 'Menu')
  toggle.setAttribute('aria-expanded', 'false')
  toggle.textContent = '☰'

  const overlay = document.createElement('div')
  overlay.id = 'xitcoin-mobile-menu-overlay'

  const drawer = document.createElement('aside')
  drawer.id = 'xitcoin-mobile-menu-drawer'
  drawer.setAttribute('aria-label', 'Navigation')

  const close = document.createElement('button')
  close.id = 'xitcoin-mobile-menu-close'
  close.type = 'button'
  close.setAttribute('aria-label', 'Close menu')
  close.textContent = '×'

  const menuLinks = document.createElement('nav')
  menuLinks.id = 'xitcoin-mobile-menu-links'
  for (const link of navigationLinks) {
    const copy = link.cloneNode(true)
    if (link.textContent.trim() === 'Buy XTC') {
      copy.textContent = 'Buy Xitcoin (XTC)'
      copy.setAttribute('data-xitcoin-buy-link', '')
    }
    copy.removeAttribute('data-xitcoin-mobile-navlink')
    copy.addEventListener('click', closeMenu)
    menuLinks.append(copy)
  }

  drawer.append(close, menuLinks)
  document.body.append(overlay, drawer)
  header.append(toggle)

  function applyLayout() {
    const mobile = window.matchMedia('(max-width:960px)').matches
    if (mobile) {
      if (!drawer.contains(group)) drawer.append(group)
    } else if (groupHome && !groupHome.contains(group)) {
      groupHome.insertBefore(group, groupNextSibling)
      closeMenu()
    }
  }

  function closeMenu() {
    drawer.classList.remove('is-open')
    overlay.classList.remove('is-open')
    toggle.setAttribute('aria-expanded', 'false')
  }

  close.addEventListener('click', closeMenu)

  toggle.addEventListener('click', () => {
    applyLayout()
    const open = !drawer.classList.contains('is-open')
    drawer.classList.toggle('is-open', open)
    overlay.classList.toggle('is-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    if (open) applyLocale()
  })

  overlay.addEventListener('click', closeMenu)
  window.addEventListener('resize', applyLayout, { passive: true })
  applyLayout()
}


function addResponsiveLayoutGuards() {
  if (document.getElementById('xitcoin-responsive-layout-guards')) return

  const style = document.createElement('style')
  style.id = 'xitcoin-responsive-layout-guards'
  style.textContent = `
    [data-side][data-align] a {
      display: block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    @media (min-width: 380px) {
      [data-side][data-align] a {
        overflow: visible;
        text-overflow: clip;
        white-space: normal;
        overflow-wrap: anywhere;
      }
    }

    #xitcoin-mobile-menu-drawer a[href="https://inoswap.org"] {
      display: flex !important;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    #xitcoin-mobile-menu-drawer a[href="https://inoswap.org"]::after {
      content: "↗";
      flex: 0 0 auto;
      font-size: 18px;
      line-height: 1;
    }

    @media (max-width: 959px) {
      header button[class*="md:hidden"] {
        display: none !important;
      }

      header [data-xitcoin-logo] {
        flex: 1 1 auto;
        min-width: 0;
        max-width: calc(100vw - 82px);
      }

      header [data-xitcoin-logo] img,
      header [data-xitcoin-logo] > span:first-child {
        flex: 0 0 auto;
      }
    }

    @media (max-width: 359px) {
      header [data-xitcoin-logo] > span:last-child span:last-child {
        display: none;
      }
    }

    @media (max-width: 299px) {
      header [data-xitcoin-logo] > span:last-child {
        display: none;
      }
    }
  `
  document.head.append(style)
}

function initialize() {
  addStyles()
  addResponsiveLayoutGuards()
  addSelector()
  setupMobileNavigation()
  addLocaleNotice()
  applyLocale()
}

let selectorRetry

function initializeWhenReady() {
  initialize()
  if (document.getElementById('xitcoin-language') || selectorRetry) return

  let attempts = 0
  selectorRetry = window.setInterval(() => {
    initialize()
    attempts += 1
    if (document.getElementById('xitcoin-language') || attempts >= 60) {
      window.clearInterval(selectorRetry)
      selectorRetry = undefined
    }
  }, 250)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeWhenReady, { once: true })
} else {
  initializeWhenReady()
}
window.addEventListener('load', initializeWhenReady, { once: true })
