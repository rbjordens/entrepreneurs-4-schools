// Check that the userID specified owns the documents
ownsDocument = function(userId, doc) {
	return doc && doc.userId === userId;
}