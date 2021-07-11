<?php

/*
 * This file is part of justoverclock/flarum-ext-feedback.
 *
 * Copyright (c) 2021 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\Feedback;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Routes('api'))
        ->post('/feedback', 'justoverclock-feedback-submit', Api\Controller\SubmitFeedbackController::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(Api\FeedbackSettings::class),

    (new Extend\Settings)
        ->serializeToForum('boxTitle', 'justoverclock-feedback.boxTitle'),
];
