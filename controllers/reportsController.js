let reports = [];

exports.getReports = (req, res) => {
  res.json(reports);
};

exports.createReport = (req, res) => {
  const report = req.body;
  if (!report.patient || !report.details) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  reports.push(report);
  res.status(201).json({ message: 'Report submitted', report });
};
