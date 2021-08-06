import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby'

export default function PrivacyCard() {
  return (
    <motion.div
      key="privacy-card"
      className="card-container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Link className="cross-redirect" to="/">
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3.0923" y1="2.97195" x2="19.0923" y2="19.972" stroke="white" strokeWidth="3"/>
        <line x1="2.9077" y1="19.972" x2="18.9077" y2="2.97195" stroke="white" strokeWidth="3"/>
        </svg>
      </Link>
      <p className="card-text">Rechtliches <br />
      Impressum <br />
      Nach §5 TMG und §55 RStV von der Impressumspflicht befreit. <br />
      E-Mail: info@joschabauer.com <br />
      <br />
      Datenschutz <br />
      Sicherheit und Schutz Ihrer personenbezogenen Daten <br />
      Aus Technischen- und Sicherheitsgründen werden vom Provider (strato.de) von Ihnen gewisse technische Daten gespeichert. Mehr Details dazu erhalten Sie weiter unten. Bei Schriftverkehr behalte ich zur Kontaktaufnahme Ihre Kontaktdaten. Die Vertraulichkeit der von Ihnen bereitgestellten personenbezogenen Daten werden gewahrt und diese vor unbefugten Zugriffen geschützt. <br />
      <br />
      Begriffsbestimmungen <br />
      Der Gesetzgeber fordert, dass personenbezogene Daten auf rechtmäßige Weise, nach Treu und Glauben und in einer für die betroffene Person nachvollziehbaren Weise verarbeitet werden („Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz“). Um dies zu gewährleisten, informieren wir Sie über die einzelnen gesetzlichen Begriffsbestimmungen, die auch in dieser Datenschutzerklärung verwendet werden: <br />
      <br />
      Personenbezogene Daten <br />
      „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind. <br />
      <br />
      Verarbeitung <br />
      „Verarbeitung“ ist jeder, mit oder ohne Hilfe automatisierter Verfahren, ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung. <br />
      <br />
      Einschränkung der Verarbeitung <br />
      „Einschränkung der Verarbeitung“ ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken. <br />
      <br />
      Profiling  <br /><br />
      „Profiling“ ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen. <br />
      <br />
      Pseudonymisierung <br />
      „Pseudonymisierung“ ist die Verarbeitung personenbezogener Daten in einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden können. <br />
      <br />
      Dateisystem <br />
      „Dateisystem“ ist jede strukturierte Sammlung personenbezogener Daten, die nach bestimmten Kriterien zugänglich sind, unabhängig davon, ob diese Sammlung zentral, dezentral oder nach funktionalen oder geografischen Gesichtspunkten geordnet geführt wird. <br />
      <br />
      Verantwortlicher <br />
      „Verantwortlicher“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet; sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so können der Verantwortliche beziehungsweise die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden. <br />
      <br />
      Auftragsverarbeiter<br />
      „Auftragsverarbeiter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.<br />
      <br />
      Empfänger<br />
      „Empfänger“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, denen personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger; die Verarbeitung dieser Daten durch die genannten Behörden erfolgt im Einklang mit den geltenden Datenschutzvorschriften gemäß den Zwecken der Verarbeitung.<br />
      <br />
      Dritter <br />
      „Dritter“ ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten. <br />
      <br />
      Einwilligung <br />
      Eine „Einwilligung“ der betroffenen Person ist jede freiwillig für den bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist. <br />
      <br />
      Rechtmäßigkeit der Verarbeitung <br />
      Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine Rechtsgrundlage besteht. Rechtsgrundlage für die Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a – f DSGVO insbesondere sein: <br />
      <br />
      Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben; <br />
      die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen; <br />
      die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt; <br />
      die Verarbeitung ist erforderlich, um lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person zu schützen; <br />
      die Verarbeitung ist für die Wahrnehmung einer Aufgabe erforderlich, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde; <br />
      die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen, insbesondere dann, wenn es sich bei der betroffenen Person um ein Kind handelt. <br />
      Information über die Erhebung personenbezogener Daten <br />
      (1) Im Folgenden erhalten Sie Informationen über die Erhebung personenbezogener Daten bei Nutzung dieser Website. Personenbezogene Daten sind z.B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten. <br />
      <br />
      (2) Bei einer Kontaktaufnahme per E-Mail oder über ein Kontaktformular werden die von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) gespeichert, um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten werden gelöscht, nachdem die Speicherung nicht mehr erforderlich ist, oder die Verarbeitung wird eingeschränkt, falls gesetzliche Aufbewahrungspflichten bestehen. <br />
      <br />
      Erhebung personenbezogener Daten bei Besuch dieser Website <br />
      Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, erheben wir nur die personenbezogenen Daten, die Ihr Browser an den Server übermittelt. Wenn Sie diese Website betrachten möchten, erhebt der Provider folgende Daten, die technisch erforderlich sind, um Ihnen die Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO): <br />
      <br />
      IP-Adresse <br />
      Datum und Uhrzeit der Anfrage <br />
      Zeitzonendifferenz zur Greenwich Mean Time (GMT) <br />
      Inhalt der Anforderung (konkrete Seite) <br />
      Zugriffsstatus/HTTP-Statuscode <br />
      jeweils übertragene Datenmenge <br />
      Website, von der die Anforderung kommt <br />
      Browser <br />
      Betriebssystem und dessen Oberfläche <br />
      Sprache und Version der Browsersoftware. <br />
      Rechte der betroffenen Person <br />
      (1) Widerruf der Einwilligung <br />
      Sofern die Verarbeitung der personenbezogenen Daten auf einer erteilten Einwilligung beruht, haben Sie jederzeit das Recht, die Einwilligung zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Für die Ausübung des Widerrufsrechts können Sie sich jederzeit an uns wenden. <br />
      <br />
      (2) Recht auf Bestätigung <br />
      Sie haben das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob wir sie betreffende personenbezogene Daten verarbeiten. Die Bestätigung können Sie jederzeit unter den oben genannten Kontaktdaten verlangen. <br />
      <br />
      (3) Auskunftsrecht <br />
      Sofern personenbezogene Daten verarbeitet werden, können Sie jederzeit Auskunft über diese personenbezogenen Daten und über folgenden Informationen verlangen: <br />
      <br />
      die Verarbeitungszwecke; <br />
      den Kategorien personenbezogener Daten, die verarbeitet werden; <br />
      die Empfänger oder Kategorien von Empfängern, gegenüber denen die personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden, insbesondere bei Empfängern in Drittländern oder bei internationalen Organisationen; <br />
      falls möglich, die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer; <br />
      das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten oder auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung; <br />
      das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde; <br />
      wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden, alle verfügbaren Informationen über die Herkunft der Daten; <br />
      das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Absätze 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person. <br />
      Werden personenbezogene Daten an ein Drittland oder an eine internationale Organisation übermittelt, so haben Sie das Recht, über die geeigneten Garantien gemäß Artikel 46 DSGVO im Zusammenhang mit der Übermittlung unterrichtet zu werden. Wir stellen eine Kopie der personenbezogenen Daten, die Gegenstand der Verarbeitung sind, zur Verfügung. Für alle weiteren Kopien, die Sie Person beantragen, können wir ein angemessenes Entgelt auf der Grundlage der Verwaltungskosten verlangen. Stellen Sie den Antrag elektronisch, so sind die Informationen in einem gängigen elektronischen Format zur Verfügung zu stellen, sofern er nichts anderes angibt. Das Recht auf Erhalt einer Kopie gemäß Absatz 3 darf die Rechte und Freiheiten anderer Personen nicht beeinträchtigen. <br />
      <br />
      (4) Recht auf Berichtigung <br />
      Sie haben das Recht, von uns unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht, die Vervollständigung unvollständiger personenbezogener Daten – auch mittels einer ergänzenden Erklärung – zu verlangen. <br />
      <br />
      (5) Recht auf Löschung („Recht auf vergessen werden“)
      Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden, und wir sind verpflichtet, personenbezogene Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft: <br />
      <br />
      Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig. <br />
      Die betroffene Person widerruft ihre Einwilligung, auf die sich die Verarbeitung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung. <br />
      Die betroffene Person legt gemäß Artikel 21 Absatz 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder die betroffene Person legt gemäß Artikel 21 Absatz 2 DSGVO Widerspruch gegen die Verarbeitung ein. <br />
      Die personenbezogenen Daten wurden unrechtmäßig verarbeitet. <br />
      Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt. <br />
      Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Artikel 8 Absatz 1 DSGVO erhoben. <br />
      Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist er gemäß Absatz 1 zu deren Löschung verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der Implementierungskosten angemessene Maßnahmen, auch technischer Art, um für die Datenverarbeitung Verantwortliche, die die personenbezogenen Daten verarbeiten, darüber zu informieren, dass eine betroffene Person von ihnen die Löschung aller Links zu diesen personenbezogenen Daten oder von Kopien oder Replikationen dieser personenbezogenen Daten verlangt hat. <br />
      <br />
      Das Recht auf Löschung („Recht auf vergessen werden“) besteht nicht, soweit die Verarbeitung erforderlich ist:
      <br />
      zur Ausübung des Rechts auf freie Meinungsäußerung und Information; <br />
      zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde; <br />
      aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Artikel 9 Absatz 2 Buchstaben h und i sowie Artikel 9 Absatz 3 DSGVO; <br />
      für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gemäß Artikel 89 Absatz 1 DSGVO, soweit das in Absatz 1 genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt, oder <br />
      zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. <br />
      (6) Recht auf Einschränkung der Verarbeitung <br />
      Sie haben das Recht, von uns die Einschränkung der Verarbeitung ihrer personenbezogenen Daten zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist: <br />
      <br />
      die Richtigkeit der personenbezogenen Daten von der betroffenen Person bestritten wird, und zwar für eine Dauer, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen, <br />
      die Verarbeitung unrechtmäßig ist und die betroffene Person die Löschung der personenbezogenen Daten ablehnt und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangt; <br />
      der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, die betroffene Person sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigt, oder <br />
      die betroffene Person Widerspruch gegen die Verarbeitung gemäß Artikel 21 Absatz 1 DSGVO eingelegt hat, solange noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber denen der betroffenen Person überwiegen. <br />
      Wurde die Verarbeitung gemäß den oben genannten Voraussetzungen eingeschränkt, so werden diese personenbezogenen Daten – von ihrer Speicherung abgesehen – nur mit Einwilligung der betroffenen Person oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet. <br />
      <br />
      Um das Recht auf Einschränkung der Verarbeitung geltend zu machen, kann sich die betroffene Person jederzeit an uns unter den oben angegebenen Kontaktdaten wenden. <br />
      <br />
      (7) Recht auf Datenübertragbarkeit <br />
      Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern: <br />
      <br />
      die Verarbeitung auf einer Einwilligung gemäß Artikel 6 Absatz 1 Buchstabe a oder Artikel 9 Absatz 2 Buchstabe a oder auf einem Vertrag gemäß Artikel 6 Absatz 1 Buchstabe b DSGVO beruht und
      die Verarbeitung mithilfe automatisierter Verfahren erfolgt.
      Bei der Ausübung des Rechts auf Datenübertragbarkeit gemäß Absatz 1 haben Sie das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen zu einem anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist. Die Ausübung des Rechts auf Datenübertragbarkeit lässt das Recht auf Löschung („Recht auf Vergessen werden“) unberührt. Dieses Recht gilt nicht für eine Verarbeitung, die für die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde. <br />
      <br />
      (8) Widerspruchsrecht <br /> <br />
      Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Artikel 6 Absatz 1 Buchstaben e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Der Verantwortliche verarbeitet die personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. <br /> <br />
      <br />
      Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so haben SIe das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet. <br /> <br />
      <br />
      Im Zusammenhang mit der Nutzung von Diensten der Informationsgesellschaft könne Sie ungeachtet der Richtlinie 2002/58/EG Ihr Widerspruchsrecht mittels automatisierter Verfahren ausüben, bei denen technische Spezifikationen verwendet werden. <br /> <br />
      <br />
      Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Sie betreffende Verarbeitung Sie betreffender personenbezogener Daten, die zu wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Artikel 89 Absatz 1 erfolgt, Widerspruch einzulegen, es sei denn, die Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe erforderlich. <br />
      <br />
      Das Widerspruchsrecht können Sie jederzeit ausüben, indem Sie sich an den jeweiligen Verantwortlichen wenden. <br />
      <br />
      (9) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling  <br /> <br />
      Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die Entscheidung: <br />
      <br />
      für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen erforderlich ist, <br />
      aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder
      mit ausdrücklicher Einwilligung der betroffenen Person erfolgt. <br />
      Der Verantwortliche trifft angemessene Maßnahmen, um die Rechte und Freiheiten sowie die berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf Anfechtung der Entscheidung gehört. <br />
      <br />
      Dieses Recht kann die betroffene Person jederzeit ausüben, indem sie sich an den jeweiligen Verantwortlichen wendet. <br />
      <br />
      (10) Recht auf Beschwerde bei einer Aufsichtsbehörde <br />
      Sie haben zudem, unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs, das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn die betroffene Person der Ansicht ist, dass die Verarbeitung der sie betreffenden personenbezogenen Daten gegen diese Verordnung verstößt. <br />
      <br />
      (11) Recht auf wirksamen gerichtlichen Rechtsbehelf <br />
      Sie haben unbeschadet eines verfügbaren verwaltungsrechtlichen oder außergerichtlichen Rechtsbehelfs einschließlich des Rechts auf Beschwerde bei einer Aufsichtsbehörde gemäß Artikel 77 DSGVO das Recht auf einen wirksamen gerichtlichen Rechtsbehelf, wenn sie der Ansicht ist, dass Ihre, aufgrund dieser Verordnung zustehenden Rechte, infolge einer nicht im Einklang mit dieser Verordnung stehenden Verarbeitung Ihrer personenbezogenen Daten verletzt wurden. <br />
      </p>
    </motion.div>
  )
}
