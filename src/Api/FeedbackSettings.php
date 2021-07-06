<?php

namespace Justoverclock\Feedback\Api;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Support\Arr;

class FeedbackSettings
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }
    
    public function __invoke(ForumSerializer $serializer, $model, array $attributes): array
    {
        // Check we have a destination to send feedback to, otherwise we don't
        // show the feedback widget
        if ($this->settings->get('justoverclock-feedback.ContactMail')) {
            $attributes = Arr::add($attributes, 'feedback.email', (bool) $this->settings->get('justoverclock-feedback.collect-email', false));
            $attributes = Arr::add($attributes, 'feedback.position', $this->settings->get('justoverclock-feedback.position', 'right'));

        }

        return $attributes;
    }
}