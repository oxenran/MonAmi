class SettingsTest(TestCase):
    def test_account_is_configured(self):
        assert 'assistants' in INSTALLED_APPS

class AssistantsTest(TestCase):
    def setUp(self):
        self.first_name = "test_name"
        self.last_name = "User"
        self.email = "testuser@testbase.com"

        self.test_user = Assistant.objects.create_user(
            email=self.email,
            first_name=self.first_name,
            last_name=self.last_name
        )

    def test_create_user(self):
        assert isinstance(self.test_user, Assistant)
